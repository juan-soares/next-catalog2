import z from "zod";
import { createAttributeSchema } from "@/modules/attribute/schemas";

export type AttributeInput = z.infer<typeof createAttributeSchema>;
