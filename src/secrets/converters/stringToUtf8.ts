export function stringToUtf8(str: string): Uint8Array {
  return new Uint8Array(Buffer.from(str, 'utf8'));
}
