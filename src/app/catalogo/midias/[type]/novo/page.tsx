import { notFound } from "next/navigation";
import { getMediaTypeBySlug } from "@/modules/media-type";
import { CreateMediaForm, getMediasDetailsByType } from "@/modules/media";
import { getAttributesByType } from "@/modules/attribute";
import { getLastSubfranchisesDetails } from "@/modules/franchise";

type Props = {
  params: Promise<{ type: string }>;
};

export default async function NewMediaPage({ params }: Props) {
  const { type } = await params;

  const mediaTypeInfo = getMediaTypeBySlug(type);

  if (!mediaTypeInfo) {
    notFound();
  }

  const themes = await getAttributesByType("theme");
  const medias = await getMediasDetailsByType(mediaTypeInfo.code);
  const franchises = await getLastSubfranchisesDetails();

  return (
    <div>
      <h1>Adicionar {mediaTypeInfo.label}</h1>
      <CreateMediaForm
        themes={themes}
        medias={medias}
        franchises={franchises}
      />
    </div>
  );
}
