import { notFound } from "next/navigation";
import { getMediaDetailsBySlug, MediaDetailsPage } from "@/modules/media";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ tab: string }>;
};

export default async function MediaPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { tab } = await searchParams;
  const mediaDetails = await getMediaDetailsBySlug(slug);

  if (!mediaDetails) {
    notFound();
  }

  return <MediaDetailsPage mediaDetails={mediaDetails} currentTab={tab} />;
}
