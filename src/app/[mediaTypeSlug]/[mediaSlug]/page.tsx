import { notFound } from "next/navigation";
import {
  getMediaDetailsBySlug,
  MediaPageContent,
  MediaPageHero,
  getValidMediaTabFromSearchParams,
} from "@/modules/media";

type Props = {
  params: Promise<{ mediaSlug: string }>;
  searchParams: Promise<{ tab?: string | string[] }>;
};

export default async function MediaPage({ params, searchParams }: Props) {
  const [{ mediaSlug }, { tab }] = await Promise.all([params, searchParams]);
  const media = await getMediaDetailsBySlug(mediaSlug);

  if (!media) {
    notFound();
  }

  const currentTab = getValidMediaTabFromSearchParams(tab);

  return (
    <div>
      <MediaPageHero {...media} />
      <MediaPageContent currentTab={currentTab} media={media} />
    </div>
  );
}
