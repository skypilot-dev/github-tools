import { createKeyPair } from '../createKeyPair';

describe('createKeyPair()', () => {
  it('should generate an object containing public & secret keys', async () => {
    const keyPair = await createKeyPair();
    expect(keyPair.publicKey).toBeInstanceOf(Uint8Array);
    expect(keyPair.secretKey).toBeInstanceOf(Uint8Array);
  });
});
