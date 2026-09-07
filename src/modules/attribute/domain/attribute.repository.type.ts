import type { Attribute } from "./attribute.type";
import type { AttributeTypeCode } from "./attribute-type.type";

export type CreateAttributeData = Pick<Attribute, "label" | "type" | "slug">;
export type AttributeIdentifiers = Pick<Attribute, "type" | "slug">;

export interface AttributeRepository {
  findById(id: string): Promise<Attribute | null>;
  findByType(type: AttributeTypeCode): Promise<Attribute[]>;
  createOne(newAttribute: CreateAttributeData): Promise<Attribute | null>;
  deleteOne(identifiers: AttributeIdentifiers): Promise<boolean>;
}
