import z from "zod";
import { MEDIA_TYPE_CODE_LIST } from "@/modules/media-type/consts";

export const createFranchiseSchema = z.object({
  title: z.string().min(1, "Título é obrigatório"),
  translatedTitle: z.string(),
  logo: z.file(),
  type: z.enum(MEDIA_TYPE_CODE_LIST).or(z.literal("")),
  parentFranchiseId: z.string(),
});
