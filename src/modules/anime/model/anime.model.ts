/**
 * O que este arquivo faz
 * ----------------------
 * Define o schema MongoDB para documentos de anime.
 *
 * O que este arquivo NÃO faz
 * --------------------------
 * - Não conhece catálogo.
 * - Não conhece componentes React.
 * - Não possui regras de negócio.
 * - Não transforma dados para UI.
 */

import { Schema, model, models } from "mongoose";

const AnimeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    translatedTitle: {
      type: String,
    },

    mediaType: {
      type: String,
      required: true,
    },

    releaseDate: {
      type: Date,
      required: true,
    },

    cover: {
      type: String,
      required: true,
    },
  },
  {
    collection: "mediaItems",
    timestamps: true,
  },
);

export const AnimeModel = models.Anime || model("Anime", AnimeSchema, "mediaItems");
