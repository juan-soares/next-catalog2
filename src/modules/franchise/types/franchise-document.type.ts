import { HydratedDocument } from "mongoose";

export type FranchiseDocument = HydratedDocument<{
  slug: string;
  title: string;
  logo: string;
}>;
