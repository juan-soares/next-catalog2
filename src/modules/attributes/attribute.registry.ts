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

import { genreRepository } from "./genre";
import { languageRepository } from "./language";
import type { AttributeDefinition } from "./types";

export const attributeRegistry = {
  genre: {
    key: "genre",
    slug: "generos",
    label: "Gênero",
    optionsProvider: {
      findAll: genreRepository.findAll,
    },
  },

  language: {
    key: "language",
    slug: "idiomas",
    label: "Idiomas",
    optionsProvider: {
      findAll: languageRepository.findAll,
    },
  },
} satisfies Record<string, AttributeDefinition>;

export type Attributes = keyof typeof attributeRegistry;
