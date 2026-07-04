import { notFound } from "next/navigation";
import { getMediaTypeBySlug } from "@/modules/media-type";
import { CatalogSidebar, CatalogList, CatalogSortbar } from "@/modules/catalog";

type Props = {
  params: Promise<{
    mediaTypeSlug: string;
  }>;

  searchParams: Record<string, string | string[] | undefined>;
};

export default async function MediaTypePage({ params }: Props) {
  const { mediaTypeSlug } = await params;
  const mediaType = getMediaTypeBySlug(mediaTypeSlug);

  if (!mediaType) return notFound();

  const { label } = mediaType;

  return (
    <div>
      <main>
        <h1>{label}</h1>
        <CatalogSidebar />
        <CatalogSortbar />
        <CatalogList />
      </main>
    </div>
  );
}
