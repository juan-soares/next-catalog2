import { z } from "zod";
import { createAttributeSchema } from "../schemas";

export type CreateAttributeInput = z.infer<typeof createAttributeSchema>;
