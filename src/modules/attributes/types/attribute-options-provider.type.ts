/**
 * O que este arquivo faz:
 * - Define o contrato mínimo necessário para obter opções de atributos.
 *
 * O que este arquivo NÃO faz:
 * - Não conhece banco.
 * - Não conhece Mongoose.
 * - Não conhece entidades específicas.
 */

import type { AttributeOption } from "./attribute-option.type";

export type AttributeOptionsProvider = {
  findAll(): Promise<AttributeOption[]>;
};
