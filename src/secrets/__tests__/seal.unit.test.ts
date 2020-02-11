import { stringToUtf8 } from '../converters/stringToUtf8';
import { createKeyPair } from '../createKeyPair';
import { seal } from '../seal';

describe('encrypt(encryptionKey, value)', () => {
  it('should encrypt the value with the key & return the result', async () => {
    const recipientKeyPair = await createKeyPair();
    const plaintext = 'my secret value';
    const sealedBin = await seal(recipientKeyPair.publicKey, stringToUtf8(plaintext));
    expect(sealedBin.length).toBeGreaterThan(0);
  });
});
