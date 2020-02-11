export function base64ToUtf8(base64: string): Uint8Array {
  return Buffer.from(base64, 'base64');
}
