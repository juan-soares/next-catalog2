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
    platforms: AttributeView[];
    genres: AttributeView[];
    gameplays: AttributeView[];
    modes: AttributeView[];
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
        isGame={mediaType.group === "game"}
        {...attributes}
        onCheckboxChange={handleCheckboxChange}
        onChange={handleChange}
        onSelectChange={handleChange}
        currentAttributes={{
          languageIds: mediaInputs.languageIds,
          themeIds: mediaInputs.themeIds,
          platformIds: mediaInputs.platformIds,
          genreIds: mediaInputs.genreIds,
          gameplayIds: mediaInputs.gameplayIds,
          modeIds: mediaInputs.modeIds,
          players: {
            min: mediaInputs.playersMin,
            max: mediaInputs.playersMax,
          },
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
