import { ATTRIBUTE_TYPE_KEYS, ATTRIBUTE_TYPES } from "../consts";
import { AttributeType, AttributeTypeKey } from "../types";

type Options = {
  orderBy: "label";
  order: "asc" | "desc";
};

export function getAttributeTypes(options?: Options): AttributeType[] {
  const attributeTypes: AttributeType[] = Object.keys(ATTRIBUTE_TYPES).map(
    (key) => {
      const typedKey = key as AttributeTypeKey;

      return {
        key: typedKey,
        ...ATTRIBUTE_TYPES[typedKey],
      };
    },
  );

  if (!options) return attributeTypes;

  return attributeTypes.sort((a, b) => a.label.localeCompare(b.label));
}
