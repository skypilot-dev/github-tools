import { fetchPublicKey } from '../fetchPublicKey';

describe('fetchPublicKey()', () => {
  it('given an account and repo name, should fetch its public key', async () => {
    const publicKey = await fetchPublicKey();
    console.log('publicKey:', publicKey);
    expect(publicKey).toHaveProperty('key_id');
    expect(publicKey).toHaveProperty('key');
  });
});
