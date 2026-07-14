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
import { NewGenreForm } from "./genre/components";
import { languageRepository } from "./language";
import type { AttributeDefinition } from "./types";

export const attributeRegistry = {
  genre: {
    key: "genre",
    slug: "generos",
    label: "Gêneros",
    optionsProvider: {
      findAll: genreRepository.findAll,
    },
    admin: {
      create: NewGenreForm,
    },
  },

  language: {
    key: "language",
    slug: "idiomas",
    label: "Idiomas",
    optionsProvider: {
      findAll: languageRepository.findAll,
    },
    admin: {
      create: NewGenreForm,
    },
  },
} satisfies Record<string, AttributeDefinition>;

export type Attributes = keyof typeof attributeRegistry;
