export function utf8ToBase64(utf8: Uint8Array): string {
  return Buffer.from(utf8).toString('base64');
}
