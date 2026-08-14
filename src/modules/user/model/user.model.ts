import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    nickname: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    passwordHash: {
      type: String,
      required: true,
    },
  },
  {
    collection: "users",
    timestamps: true,
  },
);

UserSchema.index({ email: 1 }, { unique: true });

export const UserModel = models.User ?? model("User", UserSchema);
