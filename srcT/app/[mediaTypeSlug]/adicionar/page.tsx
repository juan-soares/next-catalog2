import { notFound } from "next/navigation";
import { ATTRIBUTE_TYPE_LIST } from "@/modules/attribute/consts";
import { getAttributesByType } from "@/modules/attribute/services";
import { getMediaTypeDetailsBySlug } from "@/modules/media-type/services";
import { CreateMediaForm } from "@/modules/media/components";
import { getMediasViewByType } from "@/modules/media/services";
import type { FranchiseView } from "@/modules/franchise/types";

type Props = {
  params: Promise<{ mediaTypeSlug: string }>;
};

export default async function CreateMediaPage({ params }: Props) {
  const { mediaTypeSlug } = await params;
  const mediaType = getMediaTypeDetailsBySlug(mediaTypeSlug);

  if (!mediaType) {
    notFound();
  }

  const [languages, themes, platforms, genres, gameplays, modes] =
    await Promise.all(
      ATTRIBUTE_TYPE_LIST.map(({ code }) => getAttributesByType(code)),
    );

  const medias = await getMediasViewByType(mediaType.code, {
    sort: "created-asc",
    filters: {},
  });

  const franchises: FranchiseView[] = [
    {
      id: "1",
      title: "teste",
      slug: "teste",
      path: "/teste",
      logo: { url: "/logo.png", alt: "Logo da franquia" },
    },
  ];

  return (
    <div>
      <h1>Adicionar {mediaType.label}</h1>
      <CreateMediaForm
        typeCode={mediaType.code}
        medias={medias}
        languages={languages}
        themes={themes}
        platforms={platforms}
        genres={genres}
        gameplays={gameplays}
        modes={modes}
        franchises={franchises}
      />
    </div>
  );
}
