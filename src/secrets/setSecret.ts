/* eslint-disable @typescript-eslint/camelcase */
import { Response } from 'got';
import { readOption } from '../config/readOption';
import { createRestClient } from '../fetch/restClient';
import { base64ToUtf8, stringToUtf8, utf8ToBase64 } from './converters';
import { fetchPublicKey } from './fetchPublicKey';
import { seal } from './seal';

const restClient = createRestClient();

type GitHubPublicKey = {
  key: string;
  key_id: string;
}

interface RepositoryInput {
  name?: string;
  owner?: string;
}

interface SetSecretOptions {
  repo?: RepositoryInput;
  name: string;
  value: string;
}

/* Given a name & value, and optionally a repo identifier (defaulting to the account & repo
 * specified in the config), create or update a secret in that repo. */
export async function setSecret(options: SetSecretOptions): Promise<Response> {
  /* Get the public key from a public repo (it appears to be unavailable from private repos). */
  const gitHubPublicKey: GitHubPublicKey = await fetchPublicKey();
  const { key: publicKey, key_id: publicKeyId } = gitHubPublicKey;

  const {
    repo = {},
    name,
    value,
  } = options;

  const {
    name: repoName = readOption<string>('gitHub.repoName'),
    owner = readOption<string>('gitHub.owner'),
  } = repo;

  /* `got` disallows a preceding slash here. */
  const url = `repos/${owner}/${repoName}/actions/secrets/${name}`;

  const sealedValue: Uint8Array = await seal(base64ToUtf8(publicKey), stringToUtf8(value));

  const secret = {
    encrypted_value: utf8ToBase64(sealedValue),
    key_id: publicKeyId,
  };

  const putOptions = {
    jsonBody: secret,
    url,
  };

  return restClient.put(putOptions);
}
