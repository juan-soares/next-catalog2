"use client";

import { useCreateMedia } from "@/modules/media/hooks";
import {
  AssetFields,
  InfoFields,
  ProgressFields,
} from "@/modules/media/components/MediaCreateForm/components";
import type { MediaTypeView } from "@/modules/media-type/types";

type Props = { mediaType: MediaTypeView };

export function MediaCreateForm({ mediaType }: Props) {
  const { mediaInputs, handleChange, handleFileChange, handleSubmit } =
    useCreateMedia({
      mediaType,
    });

  return (
    <form onSubmit={handleSubmit}>
      <InfoFields mediaInputs={mediaInputs} onChange={handleChange} />
      <AssetFields onChange={handleFileChange} />

      <ProgressFields
        currentValue={mediaInputs.progress}
        onChange={handleChange}
      />

      <button type="submit">Enviar</button>
    </form>
  );
}
