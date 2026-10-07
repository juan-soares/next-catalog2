import { MEDIA_TYPE_CODES } from "@/modules/media-type";
import mongoose, { Schema } from "mongoose";

const MediaSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    translatedTitle: {
      type: String,
      required: true,
      trim: true,
    },

    releaseDate: {
      type: Date,
      required: true,
      index: true,
    },

    releaseYear: {
      type: Number,
      required: true,
      index: true,
    },

    typeCode: {
      type: String,
      required: true,
      enum: MEDIA_TYPE_CODES,
    },

    publicID: {
      type: String,
      required: true,
      unique: true,
      index: true,
      minlength: 5,
      maxlength: 5,
      match: /^[a-zA-Z0-9]{4}$/,
    },

    synopsis: {
      type: String,
      required: true,
      trim: true,
    },

    coverAssetId: {
      type: Schema.Types.ObjectId,
      ref: "Asset",
      required: true,
      index: true,
    },

    continuity: {
      nextId: {
        type: Schema.Types.ObjectId,
        ref: "Media",
        index: true,
      },
    },

    themeIds: [
      {
        type: Schema.Types.ObjectId,
        ref: "Attribute",
      },
    ],

    franchiseId: {
      type: Schema.Types.ObjectId,
      ref: "Franchise",
      required: true,
    },
  },

  {
    collection: "medias",
    timestamps: true,
  },
);

export const MediaModel =
  mongoose.models.Media ?? mongoose.model("Media", MediaSchema);
