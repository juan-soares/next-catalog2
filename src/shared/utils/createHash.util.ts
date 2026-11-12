export function createHash(): string {
  return crypto.randomUUID().replace(/-/g, "").slice(0, 6);
}
