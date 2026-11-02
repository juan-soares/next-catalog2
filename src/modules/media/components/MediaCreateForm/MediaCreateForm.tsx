"use client";

import { useCreateMedia } from "@/modules/media/hooks";
import {
  AssetFields,
  InfoFields,
} from "@/modules/media/components/MediaCreateForm/components";
import type { MediaTypeCode } from "@/modules/media-type/types";

type Props = { mediaTypeCode: MediaTypeCode };

export function MediaCreateForm({ mediaTypeCode }: Props) {
  const { mediaInputs, handleChange, handleFileChange, handleSubmit } =
    useCreateMedia({
      mediaTypeCode,
    });

  return (
    <form onSubmit={handleSubmit}>
      <InfoFields mediaInputs={mediaInputs} onChange={handleChange} />

      <AssetFields onChange={handleFileChange} />

      <button type="submit">Enviar</button>
    </form>
  );
}
