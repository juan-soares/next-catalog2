import { notFound } from "next/navigation";
import { ATTRIBUTE_TYPE_LIST } from "@/modules/attribute/consts";
import { getAttributesByType } from "@/modules/attribute/services";
import { getMediaTypeDetailsBySlug } from "@/modules/media-type/services";
import { CreateMediaForm } from "@/modules/media/components";
import { getMediasDetailsByType } from "@/modules/media/services";
import {
  AttributeTypeFieldCode,
  AttributeView,
} from "@/modules/attribute/types";

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

  const medias = await getMediasDetailsByType(mediaType.code, {
    sort: "created-asc",
    filters: {},
  });

  const franchises: any = [];

  return (
    <div>
      <h1>Adicionar {mediaType.label}</h1>
      <CreateMediaForm
        medias={medias}
        languages={attributesByType.languages}
        themes={attributesByType.themes}
        franchises={franchises}
      />
    </div>
  );
}
