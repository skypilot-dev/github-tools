import { Utf8KeyPair } from '../createKeyPair';
import { base64ToUtf8 } from './base64ToUtf8';
import { Base64KeyPair } from './utf8KeyPairToBase64';

export function base64KeyPairToUtf8(base64KeyPair: Base64KeyPair): Utf8KeyPair {
  const { publicKey, secretKey } = base64KeyPair;
  return {
    publicKey: base64ToUtf8(publicKey),
    secretKey: base64ToUtf8(secretKey),
  };
}
