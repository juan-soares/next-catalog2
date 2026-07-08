/**
 * O que este arquivo faz:
 * - Define o contrato de um repository de opções de atributo.
 * - Garante que qualquer atributo possa fornecer suas opções.
 *
 * O que este arquivo NÃO faz:
 * - Não acessa banco de dados.
 * - Não conhece Mongoose.
 * - Não define collections.
 * - Não contém regras de negócio.
 */

import { AttributeOption } from "./attribute-option.type";

export type AttributeOptionsRepository = {
  list(): Promise<AttributeOption[]>;
};
