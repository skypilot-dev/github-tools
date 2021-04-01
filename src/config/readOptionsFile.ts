import fs from 'fs';
import path from 'path';
import yaml from 'yaml';
import { findPackageFileDir } from '@skypilot/sugarbowl';

import type { JsonMap } from 'src/lib/types';

interface ReadOptionsFileOptions {
  pathToFile?: string;
}

export function readOptionsFile<T = JsonMap>(options: ReadOptionsFileOptions = {}): T {
  const {
    pathToFile = path.resolve(findPackageFileDir(), '.skypilot/github-tools.yaml'),
  } = options;
  if (fs.existsSync(pathToFile)) {
    const fileContents = fs.readFileSync(pathToFile, { encoding: 'utf-8' } );
    return yaml.parse(fileContents);
  }
  return {} as T;
}
