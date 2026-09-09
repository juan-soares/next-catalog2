import z from "zod";
import { editAttributeSchema } from "@/modules/attribute/schemas";

export type EditAttributeInput = z.infer<typeof editAttributeSchema>;
