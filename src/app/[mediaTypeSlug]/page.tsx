import { notFound } from "next/navigation";
import { getMediaTypeDetailsBySlug } from "@/modules/media-type";
import Link from "next/link";

type Props = {
  params: Promise<{ mediaTypeSlug: string }>;
};

export default async function MediaTypePage({ params }: Props) {
  const { mediaTypeSlug } = await params;
  const mediaType = getMediaTypeDetailsBySlug(mediaTypeSlug);

  if (!mediaType) {
    notFound();
  }

  return (
    <div>
      <h1>{mediaType.label}</h1>
      <Link href={`${mediaType.path}/adicionar`}>Adicionar</Link>
    </div>
  );
}
