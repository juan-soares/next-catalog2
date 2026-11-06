import mongoose, { Schema, model, models, type Model } from "mongoose";
import { MEDIA_TYPE_CODE_LIST } from "@/modules/media-type/consts";
import { assetSchema } from "@/modules/asset/models";
import type { MediaData } from "@/modules/media/types";
import { AttributeModel } from "@/modules/attribute/model";

void AttributeModel;

const mediaSchema = new Schema<MediaData>(
  {
    identifiers: {
      slug: {
        type: String,
        required: true,
        trim: true,
      },
      path: {
        type: String,
        required: true,
        trim: true,
      },
    },

    info: {
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
      typeCode: {
        type: String,
        enum: MEDIA_TYPE_CODE_LIST,
        required: true,
      },
    },

    attributes: {
      languageIds: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Attribute",
        },
      ],
      themeIds: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Attribute",
        },
      ],
    },

    assets: {
      cover: {
        type: assetSchema,
        required: true,
      },
      trailer: {
        type: assetSchema,
        default: null,
      },
    },

    progress: {
      acquired: {
        type: Boolean,
        required: true,
        default: false,
      },
      consumed: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
  },
  {
    collection: "medias",
    timestamps: true,
    versionKey: false,
  },
);

mediaSchema.index({ "identifiers.slug": 1 }, { unique: true });

export const MediaModel =
  (models.Media as Model<MediaData>) ?? model<MediaData>("Media", mediaSchema);
