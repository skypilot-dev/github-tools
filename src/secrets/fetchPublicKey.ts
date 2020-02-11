import { readOption } from '../config/readOption';
import { createRestClient } from '../fetch/restClient';

export interface PublicKey {
  key: string;
  key_id: string;
}

const authorizationToken = readOption<string>('gitHub.token');
const baseUrl = readOption<string>('gitHub.restEndpoint');
const restClient = createRestClient({ baseUrl, authorizationToken });

const OWNER = 'skypilotcc';
const REPO = 'toolchain';

export async function fetchPublicKey(): Promise<PublicKey> {
  // /repos/:owner/:repo/actions/secrets/public-key
  const endpoint = `repos/${OWNER}/${REPO}/actions/secrets/public-key`;
  return restClient.get(endpoint);
}
