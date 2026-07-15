/**
 * O que este arquivo faz:
 * - Gera o identificador público de um item de mídia.
 *
 * O que este arquivo NÃO faz:
 * - Não consulta banco.
 * - Não verifica duplicidade.
 * - Não conhece entidades específicas.
 */

import { slugify } from "@/lib/helpers";

export function createIdentifierWithTitleAndDate(
  title: string,
  releaseDate: Date,
): string {
  const baseSlug = slugify(title);

  const year = releaseDate.getFullYear();

  return `${baseSlug}-${year}`;
}
