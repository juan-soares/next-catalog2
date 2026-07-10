/**
 * O que este arquivo faz:
 * - Define o schema MongoDB da entidade Genre.
 * - Cria o Model utilizado pelo repository.
 *
 * O que este arquivo NÃO faz:
 * - Não contém regras de negócio.
 * - Não conhece filtros.
 * - Não conhece MediaType.
 * - Não retorna dados formatados para UI.
 */

import { Schema, model, models } from "mongoose";

const genreSchema = new Schema(
  {
    value: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    label: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

export const GenreModel = models.Genre || model("Genre", genreSchema);
