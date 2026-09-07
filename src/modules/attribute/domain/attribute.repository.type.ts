import type { Attribute } from "./attribute.type";
import type { AttributeTypeCode } from "./attribute-type.type";

export interface AttributeRepository {
  findById(id: string): Promise<Attribute | null>;
  findByType(type: AttributeTypeCode): Promise<Attribute[]>;
}
