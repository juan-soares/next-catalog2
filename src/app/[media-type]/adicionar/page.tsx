import { notFound } from "next/navigation";
import { getMediaTypeViewBySlug } from "@/modules/media-type/services";
import { MediaCreateForm } from "@/modules/media/components";
import { ATTRIBUTE_TYPE_CODE_LIST } from "@/modules/attribute/consts";
import { getAttributesViewByType } from "@/modules/attribute/services";
import { getChildlessFranchises } from "@/modules/franchise/services";

export type Props = {
  params: Promise<{ "media-type": string }>;
};

export default async function MediaTypeAddPage({ params }: Props) {
  const { "media-type": mediaTypeSlug } = await params;
  const mediaType = getMediaTypeViewBySlug(mediaTypeSlug);

  if (!mediaType) {
    notFound();
  }
  const [
    [languages, themes, platforms, genres, gameplays, modes],
    childlessFranchises,
  ] = await Promise.all([
    Promise.all(
      ATTRIBUTE_TYPE_CODE_LIST.map((code) => getAttributesViewByType(code)),
    ),
    getChildlessFranchises(),
  ]);

  const attributes = {
    languages,
    themes,
    platforms,
    genres,
    gameplays,
    modes,
    childlessFranchises,
  };

  return (
    <div>
      <h1>Adicionar {mediaType.label}</h1>

      <MediaCreateForm mediaType={mediaType} attributes={attributes} />
    </div>
  );
}
