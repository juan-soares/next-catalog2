import { notFound } from "next/navigation";
import { getMediaDetailsBySlug, MediaPageDetails } from "@/modules/media";

type Props = {
  params: Promise<{ mediaSlug: string }>;
};

export default async function MediaPage({ params }: Props) {
  const { mediaSlug } = await params;
  const media = await getMediaDetailsBySlug(mediaSlug);

  if (!media) {
    notFound();
  }

  return (
    <div>
      <MediaPageDetails {...media} />
    </div>
  );
}
