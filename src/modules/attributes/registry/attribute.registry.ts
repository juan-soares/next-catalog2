/**
 * O que este arquivo faz:
 * - Centraliza os atributos conhecidos pelo sistema.
 * - Define metadados e o repository responsável por cada atributo.
 *
 * O que este arquivo NÃO faz:
 * - Não acessa banco de dados.
 * - Não executa consultas.
 * - Não conhece MediaType.
 * - Não monta filtros.
 */

import { genreRepository, languageRepository } from "../repository";

export const attributeRegistry = {
  language: {
    key: "language",
    label: "Idiomas",
    repository: languageRepository,
  },

  genre: {
    key: "genre",
    label: "Gênero",
    repository: genreRepository,
  },
};

export type Attributes = keyof typeof attributeRegistry;
