"use client";

import { useCreateMedia } from "@/modules/media/hooks";
import {
  AssetFields,
  AttributesFields,
  InfoFields,
  ProgressFields,
  SequelFields,
} from "@/modules/media/components/MediaCreateForm/components";
import type { MediaTypeView } from "@/modules/media-type/types";
import type { AttributeView } from "@/modules/attribute/types";
import type { FranchiseView } from "@/modules/franchise/types";
import { verifyIfMediaTypeIsAGame } from "@/modules/media-type-group/services";
import type { MediaView } from "@/modules/media/types";

type Props = {
  mediaType: MediaTypeView;
  medias: MediaView[];
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

export function MediaCreateForm({ mediaType, medias, attributes }: Props) {
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
        isGame={verifyIfMediaTypeIsAGame(mediaType.code)}
        {...attributes}
        onCheckboxChange={handleCheckboxChange}
        onChange={handleChange}
        onSelectChange={handleChange}
        currentAttributes={{
          franchiseId: mediaInputs.franchiseId,
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

      <SequelFields medias={medias} />

      <ProgressFields
        currentValue={mediaInputs.progress}
        onChange={handleChange}
      />

      <button type="submit">Enviar</button>
    </form>
  );
}
