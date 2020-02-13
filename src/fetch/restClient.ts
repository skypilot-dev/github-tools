import { JsonObject } from '@skypilot/common-types';
import got, { Response } from 'got';
import { readOption } from '..';

interface RestClientCreateOptions {
  authorizationToken?: string;
  baseUrl?: string;
  headers?: object;
}

interface RestClientPutOptions<T = JsonObject> {
  baseUrl?: string;
  jsonBody: T;
  headers?: object;
  url?: string;
}

class RestClient {
  private _authorizationToken = '';
  private readonly baseUrl: string;
  private readonly headers = {};

  constructor(options: RestClientCreateOptions) {
    const {
      authorizationToken = readOption<string>('gitHub.token'),
      baseUrl = '',
      headers = {},
    } = options;
    this.authorizationToken = authorizationToken;
    this.baseUrl = baseUrl;
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

  async get<T = JsonObject>(endpoint: string): Promise<T> {

    const gotOptions = {
      // context: {
      //   token: this._authorizationToken,
      // },
      headers: {
        'Authorization': `Bearer ${this._authorizationToken}`,
      },
      prefixUrl: this.baseUrl,
      url: endpoint,
    };

    const response = await got.get(gotOptions);
    return JSON.parse(response.body);
  }

  async put<T>(options: RestClientPutOptions<T>): Promise<Response> {
    const {
      baseUrl = this.baseUrl,
      jsonBody = {},
      url = '',
    } = options;

    const gotOptions = {
      headers: {
        'Authorization': `Bearer ${this._authorizationToken}`,
      },
      json: jsonBody,
      prefixUrl: baseUrl,
      url,
    };

    return got.put(gotOptions);
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

export function createRestClient(options: RestClientCreateOptions = {}): RestClient {
  const {
    authorizationToken = readOption<string>('gitHub.token'),
    baseUrl = readOption<string>('gitHub.restEndpoint'),
  } = options;

  const restClientOptions = {
    ...options,
    authorizationToken,
    baseUrl,
  };
  return new RestClient(restClientOptions);
}
