import z from "zod";
import { createMediaSchema } from "@/modules/media/schemas";
import type { MediaTypeCode } from "@/modules/media-type";

export type CreateMediaInput = z.infer<typeof createMediaSchema>;

export type CreateMediaData = {
  title: string;
  translatedTitle: string;
  releaseDate: Date;
  releaseYear: number;
  typeCode: MediaTypeCode;
  publicID: string;
  synopsis: string;
  nextId: string;
  themeIds: string[];
  franchiseId: string;
};
