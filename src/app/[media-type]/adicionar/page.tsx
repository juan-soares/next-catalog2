import { notFound } from "next/navigation";
import { getMediaTypeViewBySlug } from "@/modules/media-type/services";
import { MediaCreateForm } from "@/modules/media/components/MediaCreateForm";

export type Props = {
  params: Promise<{ "media-type": string }>;
};

export default async function MediaTypeAddPage({ params }: Props) {
  const { "media-type": mediaTypeSlug } = await params;
  const mediaType = getMediaTypeViewBySlug(mediaTypeSlug);

  if (!mediaType) {
    notFound();
  }

  return (
    <div>
      <h1>Adicionar {mediaType.label}</h1>

      <MediaCreateForm mediaType={mediaType} />
    </div>
  );
}
