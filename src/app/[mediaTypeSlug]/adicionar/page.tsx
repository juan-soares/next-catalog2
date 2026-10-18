import { getAttributes } from "@/modules/attribute/services";
import { getMediaTypeDetailsBySlug } from "@/modules/media-type/services";
import { CreateMediaForm } from "@/modules/media/components";
import { getMediasDetailsByType } from "@/modules/media/services";
import { notFound } from "next/navigation";

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
  const medias = await getMediasDetailsByType(mediaType.code, {
    sort: "created-asc",
    filters: {},
  });

  return (
    <div>
      <h1>Adicionar {mediaType.label}</h1>
      <CreateMediaForm
        medias={medias}
        attributes={attributes}
        franchises={[]}
      />
    </div>
  );
}
