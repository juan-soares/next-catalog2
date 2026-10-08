import { notFound } from "next/navigation";
import { CreateMediaForm } from "@/modules/media";
import { getMediaTypeBySlug } from "@/modules/media-type";
import { getAttributesByType } from "@/modules/attribute";
import { getSubFranchises } from "@/modules/franchise";
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

  const [
    languages,
    editions,
    medias,
    platforms,
    genres,
    modes,
    gameplays,
    themes,
    subfranchises,
  ] = await Promise.all([
    getAttributesByType("language"),
    getAttributesByType("edition"),
    getMediasDetailsByType(mediaTypeInfo.code),
    getAttributesByType("platform"),
    getAttributesByType("genre"),
    getAttributesByType("mode"),
    getAttributesByType("gameplayStyle"),
    getAttributesByType("theme"),
    getSubFranchises(),
  ]);

  return (
    <div>
      <h1>Adicionar {mediaTypeInfo.label}</h1>
      <CreateMediaForm
        mediaType={mediaTypeInfo}
        editions={editions}
        platforms={platforms}
        gameplays={gameplays}
        modes={modes}
        genres={genres}
        medias={medias}
        languages={languages}
        themes={themes}
        subfranchises={subfranchises}
      />
    </div>
  );
}
