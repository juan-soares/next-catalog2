import { notFound } from "next/navigation";
import { getAttributes } from "@/modules/attribute";
import { CreateMediaForm } from "@/modules/media";
import { getMediaTypeDetailsBySlug } from "@/modules/media-type";

type Props = {
  params: Promise<{ mediaTypeSlug: string }>;
};

export default async function CreateMediaPage({ params }: Props) {
  const { mediaTypeSlug } = await params;
  const mediaType = getMediaTypeDetailsBySlug(mediaTypeSlug);

  if (!mediaType) {
    notFound();
  }

  const attributes = await getAttributes();

  return (
    <div>
      <h1>Adicionar {mediaType.label}</h1>
      <CreateMediaForm attributes={attributes} />
    </div>
  );
}
