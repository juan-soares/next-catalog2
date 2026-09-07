import type { Attribute } from "./attribute.type";
import type { AttributeTypeCode } from "./attribute-type.type";

export type CreateAttributeData = Pick<Attribute, "label" | "type" | "slug">;
export type AttributeIdentifiers = Pick<Attribute, "type" | "slug">;
export type UpdateAttributeData = Pick<Attribute, "label" | "slug">;

export interface AttributeRepository {
  findById(id: string): Promise<Attribute | null>;
  findByType(type: AttributeTypeCode): Promise<Attribute[]>;
  findOne(slug: string): Promise<Attribute | null>;
  createOne(newAttribute: CreateAttributeData): Promise<Attribute | null>;
  updateOne(
    identifiers: AttributeIdentifiers,
    data: UpdateAttributeData,
  ): Promise<Attribute | null>;
  deleteOne(identifiers: AttributeIdentifiers): Promise<boolean>;
}
