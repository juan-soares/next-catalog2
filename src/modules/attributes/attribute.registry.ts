/**
 * O que este arquivo faz:
 * - Centraliza os atributos conhecidos pelo sistema.
 * - Associa cada atributo aos providers e componentes administrativos.
 *
 * O que este arquivo NÃO faz:
 * - Não acessa banco.
 * - Não executa consultas.
 * - Não monta filtros.
 */

import { genreRepository } from "./genre";
import { NewGenreForm } from "./genre/components";
import { EditGenreForm } from "./genre/components/EditGenreForm";
import type { AttributeDefinition } from "./types";
import type { Genre } from "./genre/genre.entity";
import { deleteGenreAction } from "./genre/actions";

export const attributeRegistry = {
  genre: {
    key: "genre",
    slug: "generos",
    label: "Gêneros",

    optionsProvider: {
      findAll: genreRepository.findAll,
    },

    admin: {
      provider: {
        findByValue: genreRepository.findByValue,
      },

      create: NewGenreForm,
      edit: EditGenreForm,
      delete: deleteGenreAction,
    },
  } satisfies AttributeDefinition<Genre>,
};

export type Attributes = keyof typeof attributeRegistry;
