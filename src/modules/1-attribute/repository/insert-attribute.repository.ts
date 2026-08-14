import { connectToDatabase } from "@/lib/mongoose";
import { AttributeModel } from "../model";
import { Attribute, AttributeDocument } from "../types";

export async function insertAttribute(
  newAttribute: Omit<Attribute, "id">,
): Promise<Attribute> {
  await connectToDatabase();

  const document: AttributeDocument = await AttributeModel.create(newAttribute);

  return {
    id: document._id.toString(),
    value: document.value,
    label: document.label,
    type: document.type,
  };
}
