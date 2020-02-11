import { readOption } from '../config/readOption';
import { createRestClient } from '../fetch/restClient';

interface FetchPublicKeyOptions {
  owner?: string;
  repo?: string;
}

export interface PublicKey {
  key: string;
  key_id: string;
}

const restClient = createRestClient();

export async function fetchPublicKey(options: FetchPublicKeyOptions = {}): Promise<PublicKey> {
  // /repos/:owner/:repo/actions/secrets/public-key
  const {
    owner = readOption<string>('gitHub.owner'),
    repo = readOption<string>('gitHub.repoName'),
  } = options;

  const endpoint = `repos/${owner}/${repo}/actions/secrets/public-key`;
  return restClient.get(endpoint);
}
