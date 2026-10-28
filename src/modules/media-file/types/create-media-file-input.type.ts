import z from "zod";
import { createMediaFileSchema } from "@/modules/media-file/schemas";

export type CreateMediaFileInput = z.infer<typeof createMediaFileSchema>;
