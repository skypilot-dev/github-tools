/* eslint-disable @typescript-eslint/ban-ts-comment */

/* Reference:
 * https://github.com/tonyg/js-nacl#anonymous-authenticated-encryption-crypto_box_seal
 * */

import util from 'util';
import NaclFactory from 'js-nacl';

const instantiate = util.promisify(NaclFactory.instantiate);

/* TODO: Accept `string` values for `publicKey` and `plaintext`. */
export async function seal(publicKey: Uint8Array, plaintext: Uint8Array): Promise<Uint8Array> {
  return new Promise((resolve, reject) => {
    try {
      // @ts-ignore // v1.3.0 typings do not match v1.3.2 library
      instantiate(nacl => {
        const sealedText = nacl.crypto_box_seal(plaintext, publicKey);
        resolve(sealedText);
      });
    } catch (error) {
      reject(error.message);
    }
  });
}
