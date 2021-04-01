export function base64ToUtf8(base64: string): Uint8Array {
  return new Uint8Array(Buffer.from(base64, 'base64'));
}
