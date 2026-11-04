import { getMediaViewBySlug } from "@/modules/media/services";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ media: string }>;
};

export default async function MediaPage({ params }: Props) {
  const { media: mediaSlug } = await params;

  const mediaView = await getMediaViewBySlug(mediaSlug);

  if (!mediaView) {
    notFound();
  }

  const { identifiers, info } = mediaView;

  return <div>{info.title}</div>;
}
