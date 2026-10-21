import { z } from "zod";
import { MEDIA_CHARACTER_STATUS_CODE_LIST } from "@/modules/media-character/consts";

export const createMediaCharacterSchema = z.object({
  name: z.string().trim().min(1, "O nome é obrigatório."),
  codenames: z.string(),
  statusCode: z.enum(MEDIA_CHARACTER_STATUS_CODE_LIST),
  image: z.file().nullable(),
});
