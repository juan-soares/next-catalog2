import mongoose from "mongoose";

import { connectToDatabase } from "@/lib/mongoose";

import { AttributeModel } from "../attribute.model";
import { Attribute } from "@/modules/attribute/domain";

export async function deleteAttributeBySlugAndType(
  identifiers: Pick<Attribute, "slug" | "type">,
): Promise<boolean> {
  await connectToDatabase();

  const deleted = await AttributeModel.findOneAndDelete(identifiers);

  return deleted !== null;
}
