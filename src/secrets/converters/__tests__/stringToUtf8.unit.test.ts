import { stringToUtf8 } from '../stringToUtf8';

describe('stringToUtf8(:string)', () => {
  it('should convert a string to a Uint8array', () => {
    const utf8 = stringToUtf8('string');
    expect(utf8).toBeInstanceOf(Uint8Array);
  });
});
