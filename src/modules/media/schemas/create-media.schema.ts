import { z } from "zod";

export const createMediaSchema = z.object({
  title: z.string().trim().min(1, "O título é obrigatório"),
  translatedTitle: z.string().trim().optional(),
  releaseDate: z.iso.date("Informe uma data válida"),
  synopsis: z.string().trim().min(1, "A sinopse é obrigatória"),
  languages: z.array(z.string()).min(1, "Selecione pelo menos um idioma"),
  themes: z.array(z.string()).min(1, "Selecione pelo menos uma temática"),
  franchise: z.string().trim().min(1, "Selecione uma franquia."),
  cover: z
    .file("A capa é obrigatória.")
    .min(1, "A capa não pode estar vazia.")
    .mime(["image/jpeg"], "A capa deve ser uma imagem JPEG."),
  trailer: z
    .file()
    .mime(["video/mp4"], "O trailer deve ser um vídeo MP4.")
    .optional(),
  gallery: z
    .array(
      z
        .file()
        .min(1, "A imagem não pode estar vazia.")
        .mime(["image/jpeg"], "As imagens da galeria devem ser JPEG."),
    )
    .optional(),
  files: z.preprocess(
    (value) =>
      Array.isArray(value)
        ? value.filter((file) => file instanceof File && file.size > 0)
        : value,
    z.array(z.file()),
  ),
});
