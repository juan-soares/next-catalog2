import { notFound } from "next/navigation";
import { CreateMediaForm } from "@/modules/media";
import { getMediaTypeBySlug } from "@/modules/media-type";
import { getAttributesByType } from "@/modules/attribute";
import { getMediasDetailsByType } from "@/entities/media";

type Props = {
  params: Promise<{ mediaType: string }>;
};

export default async function CreateMediaPage({ params }: Props) {
  const { mediaType } = await params;
  const mediaTypeInfo = getMediaTypeBySlug(mediaType);
  if (!mediaTypeInfo) {
    notFound();
  }

  const languages = await getAttributesByType("language");
  const editions = await getAttributesByType("edition");
  const medias = await getMediasDetailsByType(mediaTypeInfo.code);
  const platforms = await getAttributesByType("platform");
  const genres = await getAttributesByType("genre");
  const modes = await getAttributesByType("mode");
  const gameplays = await getAttributesByType("gameplayStyle");
  const themes = await getAttributesByType("theme");

  return (
    <div>
      <h1>Adicionar {mediaTypeInfo.label}</h1>
      <CreateMediaForm
        groupType={mediaTypeInfo.groupType}
        editions={editions}
        platforms={platforms}
        gameplays={gameplays}
        modes={modes}
        genres={genres}
        medias={medias}
        languages={languages}
        themes={themes}
      />
    </div>
  );
}
