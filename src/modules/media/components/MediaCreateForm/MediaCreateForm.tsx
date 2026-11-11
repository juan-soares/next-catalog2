"use client";

import { useCreateMedia } from "@/modules/media/hooks";
import {
  AssetFields,
  AttributesFields,
  InfoFields,
  ProgressFields,
} from "@/modules/media/components/MediaCreateForm/components";
import type { MediaTypeView } from "@/modules/media-type/types";
import type { AttributeView } from "@/modules/attribute/types";
import type { FranchiseView } from "@/modules/franchise/types";

type Props = {
  mediaType: MediaTypeView;
  attributes: {
    languages: AttributeView[];
    themes: AttributeView[];
    childlessFranchises: FranchiseView[];
  };
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
        onCheckboxChange={handleCheckboxChange}
        onSelectChange={handleChange}
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
