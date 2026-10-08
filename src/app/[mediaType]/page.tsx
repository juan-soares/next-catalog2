import { getMediaTypeBySlug } from "@/modules/media-type";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ mediaType: string }>;
};

export default async function MediaType({ params }: Props) {
  const { mediaType } = await params;
  const mediaTypeInfo = getMediaTypeBySlug(mediaType);

  if (!mediaTypeInfo) {
    notFound();
  }

  return (
    <div>
      <h1>{mediaTypeInfo.label}</h1>
      <Link href={`/${mediaTypeInfo.slug}/adicionar`}>Adicionar</Link>
    </div>
  );
}
