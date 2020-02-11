import { stringToUtf8 } from '../converters/stringToUtf8';
import { createKeyPair } from '../createKeyPair';
import { unseal } from '../unseal';
import { seal } from '../seal';

describe('unseal(:Utf8KeyPair, ciphertext:Uint8Array)', () => {
  it('given the correct key pair and a ciphertext, should return the plaintext', async () => {
    /* Generate a key pair and seal it. */
    const recipientKeyPair = await createKeyPair();
    const plaintext = 'secret value';
    const ciphertext: Uint8Array = await seal(recipientKeyPair.publicKey, stringToUtf8(plaintext));

    const unsealedText = await unseal(recipientKeyPair, ciphertext);
    expect(unsealedText).toBe('secret value');
  });

  it('given the incorrect key pair, should throw an error', async () => {
    /* Generate a key pair and seal it. */
    const recipientKeyPair = await createKeyPair();
    const plaintext = 'secret value';
    const ciphertext: Uint8Array = await seal(recipientKeyPair.publicKey, stringToUtf8(plaintext));

    /* Try opening it with the wrong key. */
    const wrongKeyPair = await createKeyPair();
    return expect(unseal(wrongKeyPair, ciphertext)).rejects.toEqual('nacl_raw._crypto_box_seal_open signalled an error');
  });
});
