import mongoose, { Schema } from "mongoose";

/**
 * Platform (Attribute Global)
 *
 * Representa uma plataforma onde um conteúdo pode ser executado ou consumido.
 *
 * Muito utilizado principalmente para Games, mas também pode ser aplicado
 * a outros tipos de mídia interativas ou digitais.
 *
 * Exemplos:
 * - PlayStation 5 (PS5)
 * - Nintendo Switch (NSW)
 * - Xbox Series X (XSX)
 * - PC (PC)
 * - Mobile (MOB)
 */
const PlatformSchema = new Schema(
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

    /**
     * Código curto e estável da plataforma.
     *
     * Usado para:
     * - filtros
     * - URLs
     * - agrupamento
     * - lógica interna
     *
     * Exemplos:
     * PS5
     * NSW
     * XSX
     * PC
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
 * Evita recriação do model durante hot reload do Next.js.
 */
export const PlatformModel =
  mongoose.models.Platform || mongoose.model("Platform", PlatformSchema);
