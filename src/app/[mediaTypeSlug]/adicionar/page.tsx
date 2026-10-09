import { CreateMediaForm } from "@/modules/media";
import { getMediaTypeDetailsBySlug } from "@/modules/media-type";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ mediaTypeSlug: string }>;
};

export default async function CreateMediaPage({ params }: Props) {
  const { mediaTypeSlug } = await params;
  const mediaType = getMediaTypeDetailsBySlug(mediaTypeSlug);

  if (!mediaType) {
    notFound();
  }

  return (
    <div>
      <h1>Adicionar {mediaType.label}</h1>
      <CreateMediaForm />
    </div>
  );
}
