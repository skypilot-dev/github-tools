/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import lodashGet from 'lodash.get';

import type { JsonMap } from 'src/lib/types';


export type GetOrDefaultFunction<T> = (objectPath: string, defaultValue?: T) => T | undefined;

/* -- Signatures -- */
export function getOrDefault<T>(obj: JsonMap, objectPath: string, defaultValue?: T): T | undefined;
export function getOrDefault<T>(objectPath: string, defaultValue?: T): T | undefined;
export function getOrDefault<T>(obj: JsonMap): GetOrDefaultFunction<T>;

/* -- Implementation -- */
/* Given an object, a path, and (optionally) a default value, return the value mapped to the path
 * or, if the path is unmapped, then the default value or `undefined`.
 * Given an object, apply the object to the function and return a function that accepts the
 * remaining two parameters. */
export function getOrDefault<T>(
  arg1: JsonMap | string, arg2?: string | T, arg3?: T
) {
  if (typeof arg1 === 'object') {
    if (typeof arg2 === 'string') {
      return lodashGet(arg1, arg2, arg3);
    }
    return (objectPath: string, defaultValue?: T) => getOrDefault<T>(arg1, objectPath, defaultValue);
  }
  throw new Error('getOrDefault requires an object');
}
