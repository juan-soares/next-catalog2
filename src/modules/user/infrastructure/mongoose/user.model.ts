import { model, models } from "mongoose";
import { UserSchema } from "./user.schema";

export const UserModel = models.User ?? model("User", UserSchema);
