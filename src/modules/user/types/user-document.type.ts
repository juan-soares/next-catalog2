import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<{
  email: string;
  nickname: string;
  passwordHash: string;
}>;
