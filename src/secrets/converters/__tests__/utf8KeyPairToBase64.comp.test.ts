import { createKeyPair, Utf8KeyPair } from '../../createKeyPair';
import { utf8KeyPairToBase64, Base64KeyPair } from '../utf8KeyPairToBase64';

/* See also `base64KeyPairToUtf8.comp.test.ts` */

describe('utf8KeyPairToBase64(:Utf8KeyPair)', () => {
  it('should convert utf8-encoded key pair to base64-encoded', async () => {
    const utf8: Utf8KeyPair = await createKeyPair();
    expect(utf8.publicKey).toBeInstanceOf(Uint8Array);
    expect(utf8.secretKey).toBeInstanceOf(Uint8Array);

    const base64: Base64KeyPair = utf8KeyPairToBase64(utf8);
    expect(typeof base64.publicKey).toBe('string');
    expect(typeof base64.secretKey).toBe('string');
  });
});
