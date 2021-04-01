import * as path from 'path';
import { findPackageFileDir } from '@skypilot/sugarbowl';

import { getOrDefault } from '../common/object/getOrDefault';
import { readOptionsFile } from './readOptionsFile';

export function readOption<T>(objectPath: string): T | '' {
  const options = readOptionsFile();
  const localOptions = readOptionsFile({
    pathToFile: path.resolve(findPackageFileDir(), 'local/github-tools.yaml'),
  });
  const value = getOrDefault(
    localOptions,
    objectPath,
    getOrDefault(options, objectPath)
  );
  return value === undefined ? '' : value;
}
