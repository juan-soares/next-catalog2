import { notFound } from "next/navigation";
import { Catalog, getMediaTypeCatalogInfoBySlug } from "@/features/catalog";

type Props = {
  params: Promise<{ mediaType: string }>;
};

export default async function MediaTypePage({ params }: Props) {
  const { mediaType } = await params;
  const mediaTypeCatalogInfo = await getMediaTypeCatalogInfoBySlug(mediaType);
  if (!mediaTypeCatalogInfo) return notFound();

  return <Catalog info={mediaTypeCatalogInfo} />;
}
