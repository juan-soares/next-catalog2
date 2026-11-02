export function generateMediaSlug(title: string, releaseYear: number): string {
  const normalizedTitle = title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  const hash = crypto.randomUUID().replace(/-/g, "").slice(0, 6);

  return `${normalizedTitle}-${releaseYear}-${hash}`;
}
