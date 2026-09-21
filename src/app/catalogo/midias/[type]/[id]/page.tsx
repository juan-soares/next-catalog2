import { notFound } from "next/navigation";
import { getMediaDetailsById, MediaDetailsPage } from "@/modules/media";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function MediaPage({ params }: Props) {
  const { id } = await params;
  const mediaDetails = await getMediaDetailsById(id);

  if (!mediaDetails) {
    notFound();
  }

  return <MediaDetailsPage mediaDetails={mediaDetails} />;
}
