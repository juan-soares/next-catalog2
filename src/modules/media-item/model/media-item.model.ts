/**
 * O que este arquivo faz
 * ----------------------
 * Define o schema MongoDB utilizado para persistir itens
 * de mídia na collection "mediaItems".
 *
 * O que este arquivo NÃO faz
 * --------------------------
 * - Não conhece domínios específicos como Anime ou Book.
 * - Não implementa regras de negócio.
 * - Não conhece catálogo ou filtros.
 * - Não transforma documentos em entidades.
 */

import { Schema, model, models } from "mongoose";

const MediaItemSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    translatedTitle: {
      type: String,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      trim: true,
    },

    mediaType: {
      type: String,
      required: true,
      index: true,
    },

    releaseDate: {
      type: Date,
      required: true,
    },

    cover: {
      type: String,
      required: true,
    },

    attributes: {
      type: Map,
      of: Schema.Types.Mixed,
      default: {},
    },
  },
  {
    collection: "mediaItems",
    timestamps: true,
  },
);

export const MediaItemModel =
  models.MediaItem ?? model("MediaItem", MediaItemSchema);
