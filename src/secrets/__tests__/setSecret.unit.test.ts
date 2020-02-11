import { setSecret } from '../setSecret';

describe('setSecret()', () => {
  it('should set a secret', async () => {
    const plainSecret = {
      key: 'MY_KEY',
      value: 'some value',
    };
    const response = await setSecret({ plainSecret });
    console.log('response:', response);
  });
});
