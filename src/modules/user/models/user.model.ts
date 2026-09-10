import { model, models, Schema } from "mongoose";
import { USER_ROLES } from "@/modules/user/consts";

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

    role: {
      type: String,
      required: true,
      enum: USER_ROLES,
      default: "user",
    },
  },
  {
    collection: "users",
    timestamps: true,
  },
);

UserSchema.index({ email: 1 }, { unique: true });

export const UserModel = models.User ?? model("User", UserSchema);
