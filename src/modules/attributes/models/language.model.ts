import mongoose, { Schema } from "mongoose";

/**
 * Language (Attribute Global)
 *
 * Representa um idioma disponível no sistema CATFLIX.
 * Pode ser referenciado por qualquer MediaItem.
 *
 * Exemplo:
 * - Português (Brasil) -> PT-BR
 * - Inglês -> EN
 */
const LanguageSchema = new Schema(
  {
    /**
     * Nome exibido na interface.
     * Pode ser alterado livremente sem impactar referências.
     */
    label: {
      type: String,
      required: true,
    },

    /**
     * Código técnico do idioma.
     * Usado para referência estável no sistema.
     *
     * Exemplo:
     * PT-BR, EN, JA
     */
    code: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

/**
 * Evita recriação do model no hot-reload do Next.js
 */
export const LanguageModel =
  mongoose.models.Language || mongoose.model("Language", LanguageSchema);
