import { MEDIA_TYPE_KEYS } from "@/modules/media-type";
import { z } from "zod";

export const createAttributeSchema = z.object({
  label: z.string().min(1),
  attributeType: z.enum(MEDIA_TYPE_KEYS),
});
