export function buildQuery(value?: string) {
  if (!value) return undefined;

  return value.trim();
}
