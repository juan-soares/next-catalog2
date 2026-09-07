import { connectToDatabase } from "@/lib/mongoose";
import type { AttributeIdentifiers } from "@/modules/attribute/domain";
import { AttributeModel } from "../attribute.model";

export async function deleteAttributeBySlugAndType(
  identifiers: AttributeIdentifiers,
): Promise<boolean> {
  await connectToDatabase();

  const deleted = await AttributeModel.findOneAndDelete(identifiers);

  return deleted !== null;
}
