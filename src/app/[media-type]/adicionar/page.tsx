import { notFound } from "next/navigation";
import { getMediaTypeViewBySlug } from "@/modules/media-type/services";
import { MediaCreateForm } from "@/modules/media/components/MediaCreateForm";
import { ATTRIBUTE_TYPE_CODE_LIST } from "@/modules/attribute/consts";
import { getAttributesViewByType } from "@/modules/attribute/services";

export type Props = {
  params: Promise<{ "media-type": string }>;
};

export default async function MediaTypeAddPage({ params }: Props) {
  const { "media-type": mediaTypeSlug } = await params;
  const mediaType = getMediaTypeViewBySlug(mediaTypeSlug);

  if (!mediaType) {
    notFound();
  }
  const [languages, themes] = await Promise.all(
    ATTRIBUTE_TYPE_CODE_LIST.map((code) => getAttributesViewByType(code)),
  );

  const attributes = {
    languages,
    themes,
  };

  return (
    <div>
      <h1>Adicionar {mediaType.label}</h1>

      <MediaCreateForm mediaType={mediaType} attributes={attributes} />
    </div>
  );
}
