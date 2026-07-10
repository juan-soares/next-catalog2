/**
 * O que este arquivo faz:
 * - Define o contrato de uma definição de atributo.
 * - Padroniza os dados registrados no attributeRegistry.
 *
 * O que este arquivo NÃO faz:
 * - Não executa consultas.
 * - Não conhece banco.
 * - Não conhece UI.
 */

import type { AttributeOptionsProvider } from "./attribute-options-provider.type";

export type AttributeDefinition = {
  key: string;
  slug: string;
  label: string;

  optionsProvider: AttributeOptionsProvider;
};
