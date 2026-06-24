import mongoose, { Schema } from "mongoose";

/**
 * Theme (Attribute Global)
 *
 * Representa uma temática que pode ser aplicada a qualquer conteúdo do CATFLIX.
 *
 * Diferente de Genre (que classifica o tipo de narrativa),
 * Theme representa o "contexto" ou "ambientação" do conteúdo.
 *
 * Exemplos:
 * - Ninja
 * - Cyberpunk
 * - Medieval
 * - Escolar
 * - Pós-apocalíptico
 */
const ThemeSchema = new Schema(
  {
    /**
     * Nome exibido para o usuário.
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
  },
);

/**
 * Evita recriação do model durante hot reload do Next.js.
 */
export const ThemeModel =
  mongoose.models.Theme || mongoose.model("Theme", ThemeSchema);
