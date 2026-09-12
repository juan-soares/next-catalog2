import type { HydratedDocument, Types } from "mongoose";

export type AssetDocument = HydratedDocument<{
  _id: Types.ObjectId;

  title: string;
  fileName: string;
  extension: string;
  mimeType: string;
  size: number;

  createdAt: Date;
  updatedAt: Date;
}>;
