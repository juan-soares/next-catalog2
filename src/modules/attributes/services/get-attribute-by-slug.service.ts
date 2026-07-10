/**
 * O que este arquivo faz:
 * - Resolve um atributo através do slug utilizado na URL.
 * - Retorna a definição do atributo registrada no sistema.
 *
 * O que este arquivo NÃO faz:
 * - Não acessa banco.
 * - Não conhece entidades específicas.
 * - Não executa consultas.
 * - Não monta filtros.
 */

import type { AttributeDefinition } from "../types";
import { attributeRegistry } from "../attribute.registry";

export function getAttributeBySlug(slug: string): AttributeDefinition | null {
  const attribute = Object.values(attributeRegistry).find(
    (attribute) => attribute.slug === slug,
  );

  return attribute ?? null;
}
