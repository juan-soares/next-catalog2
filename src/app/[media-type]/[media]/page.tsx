import { notFound } from "next/navigation";
import { getMediaViewBySlug } from "@/modules/media/services";
import { MediaHero } from "@/modules/media/components";

type Props = {
  params: Promise<{ media: string }>;
};

export default async function MediaPage({ params }: Props) {
  const { media: mediaSlug } = await params;

  const mediaView = await getMediaViewBySlug(mediaSlug);

  if (!mediaView) {
    notFound();
  }

  return (
    <div>
      <MediaHero {...mediaView} />
    </div>
  );
}
