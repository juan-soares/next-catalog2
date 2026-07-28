import { connectToDatabase } from "@/lib/mongoose";
import { AttributeModel } from "../model";
import { Attribute } from "../types";

export async function insertAttribute(
  newAttribute: Attribute,
): Promise<Attribute> {
  await connectToDatabase();

  const document = await AttributeModel.create(newAttribute);

  return {
    value: document.value,
    label: document.label,
    type: document.type,
  };
}
