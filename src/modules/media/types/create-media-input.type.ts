import { z } from "zod";
import { createMediaSchema } from "@/modules/media/schemas";

export type CreateMediaInput = z.infer<typeof createMediaSchema>;
