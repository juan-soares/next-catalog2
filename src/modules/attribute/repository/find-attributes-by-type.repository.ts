import { connectToDatabase } from "@/lib/mongoose";
import { AttributeModel } from "../model";
import { Attribute, AttributeDocument, AttributeTypeKey } from "../types";

export async function findAttributesByType(
  type: AttributeTypeKey,
  values?: string[],
): Promise<Attribute[]> {
  await connectToDatabase();
  const document: AttributeDocument[] = await AttributeModel.find({
    type,
    value: { $in: values },
  })
    .sort({ label: 1 })
    .lean();

  return document.map(({ _id, value, label, type }) => ({
    id: _id.toString(),
    value,
    label,
    type,
  }));
}
