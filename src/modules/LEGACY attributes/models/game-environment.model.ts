import mongoose, { Schema } from "mongoose";

/**
 * GameEnvironment (Attribute Global)
 *
 * Representa o tipo de ambientação ou estrutura de gameplay de um jogo.
 *
 * Define como o jogador interage com o mundo do jogo.
 *
 * Exemplos:
 * - Mundo Aberto
 * - Plataforma
 * - Linear
 * - Sandbox
 * - Metroidvania
 * - Roguelike
 */
const GameEnvironmentSchema = new Schema(
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
export const GameEnvironmentModel =
  mongoose.models.GameEnvironment ||
  mongoose.model("GameEnvironment", GameEnvironmentSchema);
