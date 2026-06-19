import mongoose from "mongoose";

const MediaItemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },

    mediaType: { type: String, required: true },

    franchiseId: { type: String, required: true },

    description: String,
    releaseYear: Number,

    coverImage: String,
    bannerImage: String,

    rating: Number,
  },
  { timestamps: true },
);

export const MediaItemModel =
  mongoose.models.MediaItem || mongoose.model("MediaItem", MediaItemSchema);
