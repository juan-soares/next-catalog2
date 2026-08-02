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
    },

    mediaType: {
      type: String,
      required: true,
      enum: MEDIA_TYPE_KEYS,
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

    themes: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "Attribute",
        },
      ],
      required: true,
      default: [],
    },

    franchises: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "Franchise",
        },
      ],
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
  models.MediaItem ?? model("MediaItem", MediaItemSchema);
