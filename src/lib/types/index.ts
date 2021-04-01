/* eslint-disable @typescript-eslint/no-empty-interface */

export interface JsonArray extends Array<JsonValue> {}

export type JsonMap = {[Key in string]?: JsonValue};

export type JsonValue = string | number | boolean | null | JsonMap | JsonArray;
