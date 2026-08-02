import { MEDIA_TYPE_KEYS } from "@/modules/media-type";
import { Schema, model, models } from "mongoose";
import { CharacterSchema } from "./media-item-character.model";

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
      lowercase: true,
      index: true,
    },

    mediaType: {
      type: String,
      required: true,
      enum: MEDIA_TYPE_KEYS,
      index: true,
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

    characters: {
      type: [CharacterSchema],
      default: [],
    },

    attributes: {
      type: Map,
      of: Schema.Types.Mixed,
      default: {},
    },

    themes: {
      type: [String],
      default: [],
    },

    acquired: {
      type: Boolean,
      default: false,
    },

    complete: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: "mediaItems",
    timestamps: true,
  },
);

export const MediaItemModel =
  models.MediaItem ?? model("MediaItem", MediaItemSchema);
