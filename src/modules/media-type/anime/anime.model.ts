/**
 * O que este arquivo faz:
 * - Define o modelo de persistência do Anime no MongoDB.
 *
 * O que este arquivo NÃO faz:
 * - Não contém regras de negócio.
 * - Não executa casos de uso.
 * - Não conhece UI.
 */

import { Schema, model, models } from "mongoose";

const AnimeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },

    translatedTitle: {
      type: String,
    },

    releaseDate: {
      type: Date,
      required: true,
    },

    cover: {
      type: String,
      required: true,
    },

    trailer: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const AnimeModel = models.Anime || model("Anime", AnimeSchema, "animes");
