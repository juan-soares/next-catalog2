import { notFound } from "next/navigation";
import { getMediaDetailsById, MediaDetailsPage } from "@/modules/media";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ tab: string }>;
};

export default async function MediaPage({ params, searchParams }: Props) {
  const { id } = await params;
  const { tab } = await searchParams;
  const mediaDetails = await getMediaDetailsById(id);

  if (!mediaDetails) {
    notFound();
  }

  return <MediaDetailsPage mediaDetails={mediaDetails} currentTab={tab} />;
}
