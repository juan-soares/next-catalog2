import type { HydratedDocument, Types } from "mongoose";

export type FranchiseDocument = HydratedDocument<{
  _id: Types.ObjectId;

  title: string;
  translatedTitle?: string;

  logo: Types.ObjectId;

  parentFranchiseId: Types.ObjectId | null;

  createdAt: Date;
  updatedAt: Date;
}>;
