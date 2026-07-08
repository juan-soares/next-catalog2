/**
 * O que este arquivo faz:
 * - Implementa o repository responsável pelo atributo genre.
 * - Define o ponto de entrada para buscar opções de gênero.
 *
 * O que este arquivo NÃO faz:
 * - Não acessa MongoDB ainda.
 * - Não conhece Mongoose.
 * - Não monta filtros.
 * - Não conhece MediaType.
 */

import { AttributeOptionsRepository } from "../types";

export const genreRepository: AttributeOptionsRepository = {
  async list() {
    return [];
  },
};
