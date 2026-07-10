/**
 * O que este arquivo faz:
 * - Resolve um atributo através do registry.
 * - Retorna suas opções disponíveis.
 *
 * O que este arquivo NÃO faz:
 * - Não conhece banco.
 * - Não conhece entidades específicas.
 * - Não monta filtros.
 */

import type { AttributeOption } from "../types";
import { attributeRegistry, type Attributes } from "../registry";

export async function listOptionsByAttribute(
  attribute: Attributes,
): Promise<AttributeOption[]> {
  return attributeRegistry[attribute].repository.findAll();
}
