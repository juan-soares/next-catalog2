import type {
  AttributeTypeCode,
  AttributeTypeView,
} from "@/modules/attribute/types";

export const ATTRIBUTE_TYPE_REGISTRY = {
  language: {
    code: "language",
    label: "Idiomas",
  },

  theme: {
    code: "theme",
    label: "Temas",
  },
} satisfies Record<AttributeTypeCode, AttributeTypeView>;
