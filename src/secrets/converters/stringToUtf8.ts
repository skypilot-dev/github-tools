export function stringToUtf8(str: string): Buffer {
  return Buffer.from(str, 'utf8');
}
