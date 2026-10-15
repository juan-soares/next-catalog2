import { Attribute, AttributeTypeCode } from "@/modules/attribute/types";

export async function getAttributesByType(
  type: AttributeTypeCode,
): Promise<Attribute[]> {
  const attributes: Attribute[] = [
    {
      id: "1",
      label: "PT-BR",
      type: {
        code: "language",
        field: "languages",
        label: "Idiomas",
      },
    },

    {
      id: "2",
      label: "usar-BR",
      type: {
        code: "language",
        field: "languages",
        label: "Idiomas",
      },
    },
  ];

  return attributes.filter((att) => att.type.code === type);
}
