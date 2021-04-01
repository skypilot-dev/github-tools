/* Reference:
 * https://github.com/tonyg/js-nacl#anonymous-authenticated-encryption-crypto_box_seal
 * */

import util from 'util';
import NaclFactory, { BoxKeyPair } from 'js-nacl';

export type Utf8KeyPair = {
  publicKey: Uint8Array;
  secretKey: Uint8Array;
}

const instantiate = util.promisify(NaclFactory.instantiate);

export async function createKeyPair(): Promise<Utf8KeyPair> {
  return new Promise(resolve => {
    instantiate(nacl => {
      const keyPair: BoxKeyPair = nacl.crypto_box_keypair();
      resolve({
        publicKey: keyPair.boxPk,
        secretKey: keyPair.boxSk,
      });
    });
  });
}
