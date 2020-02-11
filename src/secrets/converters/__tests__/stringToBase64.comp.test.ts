import { stringToBase64 } from '../stringToBase64';

describe('stringToBase64(:string)', () => {
  it('should convert to base 64', () => {
    const originalStr = 'mystring';
    const base64 = stringToBase64(originalStr);
    const str = base64.toString();
    expect(str).toBe(originalStr);
  });
});
