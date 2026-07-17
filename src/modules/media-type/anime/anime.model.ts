import { Schema, model, models } from "mongoose";

const animeSchema = new Schema(
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

    releaseDate: {
      type: Date,
      required: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
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

export const AnimeModel = models.Anime || model("Anime", animeSchema, "animes");
