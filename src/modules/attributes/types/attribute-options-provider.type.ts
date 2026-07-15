/**
 * O que este arquivo faz:
 * - Define o contrato para provedores de opções de atributos.
 *
 * O que este arquivo NÃO faz:
 * - Não acessa banco.
 * - Não conhece repositories.
 * - Não conhece entidades específicas.
 */

import type { AttributeOption } from "./attribute-option.type";

export type AttributeOptionsProvider = {
  findAll(): Promise<AttributeOption[]>;
};
