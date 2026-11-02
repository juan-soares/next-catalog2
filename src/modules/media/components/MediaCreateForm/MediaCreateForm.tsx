"use client";

import { useCreateMedia } from "@/modules/media/hooks";
import { InfoFields } from "@/modules/media/components/MediaCreateForm/components";
import type { MediaTypeCode } from "@/modules/media-type/types";

type Props = { mediaTypeCode: MediaTypeCode };

export function MediaCreateForm({ mediaTypeCode }: Props) {
  const { mediaInputs, handleChange, handleSubmit } = useCreateMedia({
    mediaTypeCode,
  });

  return (
    <form onSubmit={handleSubmit}>
      <InfoFields mediaInputs={mediaInputs} onChange={handleChange} />

      <button type="submit">Enviar</button>
    </form>
  );
}
