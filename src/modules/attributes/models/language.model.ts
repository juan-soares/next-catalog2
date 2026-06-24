import mongoose, { Schema } from "mongoose";

/**
 * Language (Attribute Global)
 *
 * Representa um idioma disponível no sistema CATFLIX.
 *
 * Idiomas podem ser reutilizados por qualquer conteúdo,
 * permitindo organização, filtros e classificação consistentes.
 *
 * Exemplos:
 * - Português (Brasil)
 * - Inglês
 * - Japonês
 */
const LanguageSchema = new Schema(
  {
    /**
     * Nome exibido para o usuário.
     */
    label: {
      type: String,
      required: true,
      trim: true,
    },

    /**
     * Código técnico do idioma.
     *
     * Exemplos:
     * PT-BR
     * EN
     * JA
     */
    code: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      uppercase: true,
    },
  },
  {
    timestamps: true,
  },
);

/**
 * Evita recriação do model durante o hot reload do Next.js.
 */
export const LanguageModel =
  mongoose.models.Language || mongoose.model("Language", LanguageSchema);
