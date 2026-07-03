import { getMediaTypeBySlug } from "@/modules/media-type/helpers";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    mediaTypeSlug: string;
  }>;

  searchParams: Record<string, string | string[] | undefined>;
};

export default async function MediaTypePage({ params, searchParams }: Props) {
  const { mediaTypeSlug } = await params;
  const mediaType = getMediaTypeBySlug(mediaTypeSlug);
  if (!mediaType) return notFound();
  const { label } = mediaType;

  <div>
    <h1>{label}</h1>
  </div>;
}
