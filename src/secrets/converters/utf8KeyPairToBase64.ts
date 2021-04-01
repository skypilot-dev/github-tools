import { Utf8KeyPair } from '../createKeyPair';
import { utf8ToBase64 } from './utf8ToBase64';

export type Base64KeyPair = {
  publicKey: string;
  secretKey: string;
}

export function utf8KeyPairToBase64(utf8KeyPair: Utf8KeyPair): Base64KeyPair {
  const { publicKey, secretKey } = utf8KeyPair;
  return {
    publicKey: utf8ToBase64(publicKey),
    secretKey: utf8ToBase64(secretKey),
  };
}
