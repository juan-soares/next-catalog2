import { Schema, model, models, Types } from "mongoose";

import { MEDIA_TYPE_KEYS } from "../../media-type/consts";
import type { MediaItem } from "../types";

const MediaItemSchema = new Schema(
  {
    slug: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    mediaType: {
      type: String,
      required: true,
      enum: MEDIA_TYPE_KEYS,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    translatedTitle: {
      type: String,
      trim: true,
    },

    releaseDate: {
      type: Date,
      required: true,
    },

    synopsis: {
      type: String,
      required: true,
      trim: true,
    },

    cover: {
      type: String,
      required: true,
      trim: true,
    },

    trailer: {
      type: String,
      required: true,
      trim: true,
    },

    themeIds: {
      type: [Schema.Types.ObjectId],
      ref: "AttributeItem",
      default: [],
    },

    acquired: {
      type: Boolean,
      required: true,
      default: false,
    },

    completed: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    collection: "mediaItems",
    timestamps: true,
  },
);

MediaItemSchema.index(
  {
    mediaType: 1,
    slug: 1,
  },
  {
    unique: true,
  },
);

export const MediaItemModel =
  models.MediaItem ?? model<MediaItem>("MediaItem", MediaItemSchema);
