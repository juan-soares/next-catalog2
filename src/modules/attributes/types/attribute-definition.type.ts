/**
 * O que este arquivo faz:
 * - Define o contrato de participação de um atributo na aplicação.
 * - Padroniza os dados registrados no attributeRegistry.
 *
 * O que este arquivo NÃO faz:
 * - Não executa consultas.
 * - Não acessa banco.
 * - Não monta filtros.
 * - Não executa ações administrativas.
 */

import type { ComponentType } from "react";
import type { AttributeOptionsProvider } from "./attribute-options-provider.type";

export type AttributeDefinition = {
  key: string;
  slug: string;
  label: string;

  optionsProvider: AttributeOptionsProvider;

  admin: {
    create: ComponentType;
  };
};
