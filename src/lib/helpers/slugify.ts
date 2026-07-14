/**
 * O que este arquivo faz:
 * - Converte textos em identificadores compatíveis com URLs.
 * - Remove caracteres especiais.
 * - Normaliza espaços e separadores.
 *
 * O que este arquivo NÃO faz:
 * - Não conhece entidades.
 * - Não conhece banco de dados.
 * - Não decide regras de domínio.
 */

export function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
