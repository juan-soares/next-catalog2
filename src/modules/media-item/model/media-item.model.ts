import { MEDIA_TYPE_KEYS } from "@/modules/media-type";
import { Schema, model, models } from "mongoose";

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

    cover: {
      type: String,
      required: true,
      trim: true,
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
