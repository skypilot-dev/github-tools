import { randomBytes } from 'crypto';
import { base64ToUtf8 } from '../base64ToUtf8';
import { utf8ToBase64 } from '../utf8ToBase64';

describe('utf8ToBase64(:Uint8Array)', () => {
  it('should convert a Uint8Array to a base64-encoded string', () => {
    const originalUtf8: Uint8Array = randomBytes(8);

    const base64: string = utf8ToBase64(originalUtf8);

    expect(typeof base64).toBe('string');
    expect(base64.length).toBeGreaterThan(0);

    /* Verify by converting back to utf8. */
    const utf8 = base64ToUtf8(base64);
    expect(utf8).toEqual(originalUtf8);
  });
});
