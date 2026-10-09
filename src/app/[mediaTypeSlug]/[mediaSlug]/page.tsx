import { notFound } from "next/navigation";
import {
  getMediaDetailsBySlug,
  MediaPageContent,
  MediaPageHero,
} from "@/modules/media";

type Props = {
  params: Promise<{ mediaSlug: string }>;
  searchParams: Promise<{ tab: string }>;
};

export default async function MediaPage({ params, searchParams }: Props) {
  const { mediaSlug } = await params;
  const { tab } = await searchParams;
  const media = await getMediaDetailsBySlug(mediaSlug);

  if (!media) {
    notFound();
  }

  return (
    <div>
      <MediaPageHero {...media} />
      <MediaPageContent currentTab={tab} media={media} />
    </div>
  );
}
