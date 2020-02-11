import { createKeyPair, Utf8KeyPair } from '../../createKeyPair';
import { utf8KeyPairToBase64, Base64KeyPair } from '../utf8KeyPairToBase64';
import { base64KeyPairToUtf8 } from '../base64KeyPairToUtf8';

const EQUAL = 0;

describe('base64KeyPairToUtf8(:Base64KeyPair)', () => {
  it('should convert base64-encoded key pair to utf8-encoded', async () => {
    const original: Utf8KeyPair = await createKeyPair();
    const base64: Base64KeyPair = utf8KeyPairToBase64(original);
    const utf8: Utf8KeyPair = base64KeyPairToUtf8(base64);

    expect(Buffer.compare(utf8.publicKey, original.publicKey)).toBe(EQUAL);
    expect(Buffer.compare(utf8.secretKey, original.secretKey)).toBe(EQUAL);
  });
});
