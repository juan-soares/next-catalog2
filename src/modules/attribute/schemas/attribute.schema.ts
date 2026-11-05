import z from "zod";
import { ATTRIBUTE_TYPE_CODE_LIST } from "@/modules/attribute/consts";

export const createAttributeSchema = z.object({
  label: z.string().min(1, "O valor é obrigatório"),
  typeCode: z.enum(ATTRIBUTE_TYPE_CODE_LIST),
});
