/**
 * O que este arquivo faz:
 * - Centraliza a obtenção das opções de um atributo.
 * - Resolve o repository correto através do attributeRegistry.
 * - Retorna opções prontas para consumo do domínio.
 *
 * O que este arquivo NÃO faz:
 * - Não conhece MediaType.
 * - Não monta filtros.
 * - Não renderiza UI.
 * - Não acessa MongoDB diretamente.
 */

import { attributeRegistry, Attributes } from "../registry";
import type { AttributeOption } from "../types";

export async function listOptionsByAttribute(
  attribute: Attributes,
): Promise<AttributeOption[]> {
  const attributeDefinition = attributeRegistry[attribute];

  return attributeDefinition.repository.list();
}
