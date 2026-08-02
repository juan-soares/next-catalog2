import { Schema } from "mongoose";
import { CHARACTER_STATUS } from "../consts";

export const CharacterSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    nickname: {
      type: String,
      trim: true,
    },

    image: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      required: true,
      enum: CHARACTER_STATUS,
    },
  },
  {
    _id: false,
  },
);
