import { AttributeTypeKey } from "@/modules1/attribute-type";
import { MediaTypeKey } from "../types";

export const MEDIA_TYPE_ATTRIBUTES = {
  anime: ["language", "theme"],
} satisfies Record<MediaTypeKey, AttributeTypeKey[]>;
