/**
 * O que este arquivo faz
 * ----------------------
 * Define a entidade MediaItem utilizada pela aplicação.
 *
 * O que este arquivo NÃO faz
 * --------------------------
 * - Não conhece MongoDB.
 * - Não conhece Mongoose.
 * - Não implementa regras de negócio.
 * - Não conhece componentes React.
 */

import { MediaTypeKey } from "@/modules/media-type";

export type MediaItem = {
  title: string;
  translatedTitle?: string;

  mediaType: MediaTypeKey;
  slug: string;

  releaseDate: Date;

  cover: string;

  attributes: Record<string, unknown>;

  createdAt: Date;
  updatedAt: Date;
};
