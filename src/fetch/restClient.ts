import { JsonObject } from '@skypilot/common-types';
import got from 'got';
import { readOption } from '../config/readOption';

interface RestClientCreateOptions {
  authorizationToken?: string;
  endpoint?: string;
  headers?: object;
  baseUrl?: string;
}

interface RestClientPutOptions {
  baseUrl?: string;
  contentType?: string;
  endpoint?: string;
  headers?: object;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transformer?: <T>(data: any) => T;
}

class RestClient {
  private _authorizationToken = '';
  private baseUrl: string;
  private endpoint = '';
  private headers = {};

  constructor(options: RestClientCreateOptions) {
    const {
      authorizationToken = readOption<string>('gitHub.token'),
      baseUrl = '',
      endpoint = '',
      headers = {},
    } = options;
    this.authorizationToken = authorizationToken;
    this.endpoint = endpoint;
    this.headers = {
      ...this.headers,
      headers,
    };
    this.baseUrl = baseUrl;
  }

  get authorizationToken(): string {
    return this._authorizationToken;
  }

  set authorizationToken(token: string) {
    if (!token) {
      this._authorizationToken = '';
    } else {
      this._authorizationToken = token;
    }
  }

  async get(endpoint: string): Promise<any> {

    const gotOptions = {
      context: {
        token: this._authorizationToken,
      },
      headers: {
        'Authorization': `Bearer ${this._authorizationToken}`
      },
      prefixUrl: this.baseUrl,
      url: endpoint,
    };

    console.log('gotOptions:', gotOptions);

    const response = await got.get(gotOptions);
    return JSON.parse(response.body);
  }

  async put(_jsonBody: JsonObject, options: RestClientPutOptions): Promise<any> {
    const {
      baseUrl = this.baseUrl,
      endpoint = this.endpoint,
    } = options;

    const gotOptions = {
      json: { hello: 'world' },
      prefixUrl: baseUrl,
    };

    return got.put(endpoint, gotOptions);
  }
}

/*
export const gotClient = got.extend({
  hooks: {
    beforeRequest: [
      options => {
        if (!options.context) {
          options.headers.tokens = {},
        }
  },
});
*/

export function createRestClient(options: RestClientCreateOptions) {
  return new RestClient(options);
}
