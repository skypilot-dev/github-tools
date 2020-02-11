import { base64ToUtf8 } from '../base64ToUtf8';
import { stringToBase64 } from '../stringToBase64';
import { utf8ToBase64 } from '../utf8ToBase64';

describe('base64ToUtf8(base64:string)', () => {
  it('should convert & return the value as a Uint8Array', () => {
    // const originalBase64 = 'aGVsbG8gd29ybGQ=';
    const originalBase64 = stringToBase64('mysecretvalue');

    /* Check the conversion. */
    const utf8 = base64ToUtf8(originalBase64);
    expect(utf8).toBeInstanceOf(Uint8Array);
    expect(utf8).toBeInstanceOf(Buffer);

    /* Verify by converting back to base64. */
    const base64 = utf8ToBase64(utf8);
    expect(base64.toString()).toEqual(originalBase64.toString());
  });
});
