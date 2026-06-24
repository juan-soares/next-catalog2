import mongoose, { Schema } from "mongoose";

/**
 * Resolution (Attribute Global)
 *
 * Representa a resolução de exibição de um conteúdo no CATFLIX.
 *
 * Usado principalmente para vídeo (anime, séries, filmes, etc),
 * mas pode ser útil em assets e arquivos também.
 *
 * Exemplos:
 * - 4K (2160p)
 * - Full HD (1080p)
 * - HD (720p)
 */
const ResolutionSchema = new Schema(
  {
    /**
     * Nome exibido para o usuário.
     */
    label: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    /**
     * Código técnico da resolução.
     *
     * Usado para:
     * - filtros
     * - ordenação técnica
     * - padronização de dados
     *
     * Exemplos:
     * 2160p
     * 1080p
     * 720p
     */
    code: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
  },
  {
    timestamps: true,
  },
);

/**
 * Evita recriação do model durante hot reload do Next.js.
 */
export const ResolutionModel =
  mongoose.models.Resolution || mongoose.model("Resolution", ResolutionSchema);
