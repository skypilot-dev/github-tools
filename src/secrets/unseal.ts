/* eslint-disable @typescript-eslint/ban-ts-ignore */

/* Reference:
* https://github.com/tonyg/js-nacl#naclcrypto_box_seal_openciphertextbin-recipientpublickeybin-recipientsecretkeybin--uint8array
*  */

import util from 'util';
import NaclFactory from 'js-nacl';
import { Utf8KeyPair } from './createKeyPair';

const instantiate = util.promisify(NaclFactory.instantiate);

export async function unseal(recipientKeyPair: Utf8KeyPair, ciphertext: Uint8Array): Promise<string> {
  return new Promise((resolve, reject) => {
    instantiate(nacl => {
      const { publicKey, secretKey } = recipientKeyPair;
      try {
        // @ts-ignore // v1.2.0 typings do not match v1.3.2 library
        const plaintextUtf8 = nacl.crypto_box_seal_open(ciphertext, publicKey, secretKey);
        resolve(nacl.decode_utf8(plaintextUtf8));
      } catch (error) {
        reject(error.message);
      }
    });
  });
}
