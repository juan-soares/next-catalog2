import mongoose, { Schema } from "mongoose";

/**
 * GameMode (Attribute Global)
 *
 * Representa o modo de jogo disponível em um conteúdo interativo.
 *
 * Usado principalmente para jogos eletrônicos, mas pode ser aplicado
 * a qualquer mídia com interação ou multiplayer.
 *
 * Exemplos:
 * - Single Player
 * - Multiplayer
 * - Co-op (Cooperativo)
 * - PvP (Player vs Player)
 */
const GameModeSchema = new Schema(
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
export const GameModeModel =
  mongoose.models.GameMode || mongoose.model("GameMode", GameModeSchema);
