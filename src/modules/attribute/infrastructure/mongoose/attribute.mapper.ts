import { Attribute } from "../../domain/attribute.type";
import { AttributeDocument } from "./attribute-document.type";

export function toAttribute(document: AttributeDocument): Attribute {
  return {
    id: document._id.toString(),
    label: document.label,
    slug: document.slug,
    type: document.type,
    createdAt: document.createdAt,
    updatedAt: document.updatedAt,
  };
}
