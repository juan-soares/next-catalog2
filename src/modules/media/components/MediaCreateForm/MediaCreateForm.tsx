"use client";

import {
  AssetFields,
  AttributesFields,
  GameExpansionsFields,
  InfoFields,
  ProgressFields,
  SequelFields,
} from "@/modules/media/components/MediaCreateForm/components";
import type { MediaTypeView } from "@/modules/media-type/types";
import type { AttributeView } from "@/modules/attribute/types";
import type { FranchiseView } from "@/modules/franchise/types";
import { verifyIfMediaTypeIsAGame } from "@/modules/media-type-group/services";
import type { MediaView } from "@/modules/media/types";
import { createMediaAction } from "@/modules/media/actions";

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
  const isGame = verifyIfMediaTypeIsAGame(mediaType.code);

  return (
    <form action={createMediaAction}>
      <input
        type="hidden"
        name="mediaTypeCode"
        value={mediaType.code}
        required
      />

      <InfoFields />

      <AssetFields />

      <AttributesFields isGame={isGame} {...attributes} />

      {isGame && <GameExpansionsFields medias={medias} />}

      <SequelFields medias={medias} />

      <ProgressFields />

      <button type="submit">Enviar</button>
    </form>
  );
}
