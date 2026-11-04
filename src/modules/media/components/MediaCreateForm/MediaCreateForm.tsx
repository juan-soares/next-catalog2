"use client";

import { useCreateMedia } from "@/modules/media/hooks";
import {
  AssetFields,
  AttributesFields,
  InfoFields,
  ProgressFields,
} from "@/modules/media/components/MediaCreateForm/components";
import type { MediaTypeView } from "@/modules/media-type/types";
import type { MediaAttributeView } from "@/modules/media/types";

type Props = {
  mediaType: MediaTypeView;
  attributes: { languages: MediaAttributeView[]; themes: MediaAttributeView[] };
};

export function MediaCreateForm({ mediaType, attributes }: Props) {
  const {
    mediaInputs,
    handleChange,
    handleCheckboxChange,
    handleFileChange,
    handleSubmit,
  } = useCreateMedia({
    mediaType,
  });

  return (
    <form onSubmit={handleSubmit}>
      <InfoFields mediaInputs={mediaInputs} onChange={handleChange} />

      <AssetFields onChange={handleFileChange} />

      <AttributesFields
        {...attributes}
        onChange={handleCheckboxChange}
        currentAttributes={{
          languageIds: mediaInputs.languageIds,
          themeIds: mediaInputs.themeIds,
        }}
      />

      <ProgressFields
        currentValue={mediaInputs.progress}
        onChange={handleChange}
      />

      <button type="submit">Enviar</button>
    </form>
  );
}
