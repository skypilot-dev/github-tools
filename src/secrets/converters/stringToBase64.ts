export function stringToBase64(str: string): string {
  return Buffer.from(str, 'base64').toString('base64');
}
