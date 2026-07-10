/**
 * O que este arquivo faz:
 * - Centraliza os atributos conhecidos pelo sistema.
 * - Associa cada atributo ao seu provider de opções.
 *
 * O que este arquivo NÃO faz:
 * - Não acessa banco.
 * - Não executa consultas.
 * - Não monta filtros.
 */

import { genreRepository } from "../genre";
import { AttributeDefinition } from "../types";

export const attributeRegistry = {
  language: {
    key: "language",
    label: "Idiomas",
    repository: genreRepository,
  },

  genre: {
    key: "genre",
    label: "Gênero",
    repository: genreRepository,
  },
} satisfies Record<string, AttributeDefinition>;

export type Attributes = keyof typeof attributeRegistry;
