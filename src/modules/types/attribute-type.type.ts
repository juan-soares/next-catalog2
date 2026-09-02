export type AttributeTypeCode = "theme";

type AttributeType = {
  code: AttributeTypeCode;
  label: string;
  slug: string;
};

const ATTRIBUTE_TYPES = {
  theme: {
    code: "theme",
    label: "Temas",
    slug: "temas",
  },
} satisfies Record<AttributeTypeCode, AttributeType>;
