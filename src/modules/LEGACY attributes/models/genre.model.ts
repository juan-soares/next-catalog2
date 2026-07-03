import mongoose, { Schema } from "mongoose";

/**
 * Genre (Attribute Global)
 *
 * Representa um gênero que pode ser associado a qualquer conteúdo do CATFLIX.
 *
 * Um gênero ajuda a classificar e organizar conteúdos por categoria,
 * permitindo filtros, buscas e agrupamentos.
 *
 * Exemplos:
 * - Ação
 * - Aventura
 * - Terror
 * - Comédia
 */
const GenreSchema = new Schema(
  {
    /**
     * Nome exibido para o usuário.
     *
     * Exemplo:
     * "Ação"
     * "Terror"
     * "Comédia"
     */
    label: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * Evita recriação do model durante o hot reload do Next.js.
 */
export const GenreModel =
  mongoose.models.Genre || mongoose.model("Genre", GenreSchema);