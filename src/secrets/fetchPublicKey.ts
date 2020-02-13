import { JsonObject } from '@skypilot/common-types';
import { createRestClient } from '../fetch/restClient';
import { readOption } from '..';

interface FetchPublicKeyOptions {
  owner?: string;
  repo?: string;
}

interface GitHubPublicKey extends JsonObject {
  key: string;
  key_id: string;
}

const restClient = createRestClient();

export async function fetchPublicKey(options: FetchPublicKeyOptions = {}): Promise<GitHubPublicKey> {
  /* `repos/:owner/:repo/actions/secrets/public-key` */
  const {
    owner = readOption<string>('gitHub.defaultOwner')
      || readOption<string>('gitHub.owner'),
    repo = readOption<string>('gitHub.defaultPublicRepoName')
      || readOption<string>('gitHub.repoName'),
  } = options;

  const endpoint = `repos/${owner}/${repo}/actions/secrets/public-key`;
  return restClient.get<GitHubPublicKey>(endpoint);
}
