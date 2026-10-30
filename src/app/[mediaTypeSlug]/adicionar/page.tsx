import { notFound } from "next/navigation";
import { ATTRIBUTE_TYPE_LIST } from "@/modules/attribute/consts";
import { getAttributesByType } from "@/modules/attribute/services";
import { getMediaTypeDetailsBySlug } from "@/modules/media-type/services";
import { CreateMediaForm } from "@/modules/media/components";

import {
  AttributeTypeFieldCode,
  AttributeView,
} from "@/modules/attribute/types";
import { getMediasViewByType } from "@/modules/media/services";

type Props = {
  params: Promise<{ mediaTypeSlug: string }>;
};

export default async function CreateMediaPage({ params }: Props) {
  const { mediaTypeSlug } = await params;
  const mediaType = getMediaTypeDetailsBySlug(mediaTypeSlug);

  if (!mediaType) {
    notFound();
  }

  const attributesByType = Object.fromEntries(
    await Promise.all(
      ATTRIBUTE_TYPE_LIST.map(async ({ code, field }) => [
        field,
        await getAttributesByType(code),
      ]),
    ),
  ) as Record<AttributeTypeFieldCode, AttributeView[]>;

  const medias = await getMediasViewByType(mediaType.code, {
    sort: "created-asc",
    filters: {},
  });

  const franchises: any = [];

  return (
    <div>
      <h1>Adicionar {mediaType.label}</h1>
      <CreateMediaForm
        typeCode={mediaType.code}
        medias={medias}
        languages={attributesByType.languages}
        themes={attributesByType.themes}
        platforms={attributesByType.platforms}
        genres={attributesByType.genres}
        gameplays={attributesByType.gameplays}
        modes={attributesByType.modes}
        franchises={franchises}
      />
    </div>
  );
}
