import { notFound } from "next/navigation";
import { getMediaTypeBySlug } from "@/modules/media-type";

type Props = {
  params: Promise<{ type: string }>;
};

export default async function NewMediaPage({ params }: Props) {
  const { type } = await params;

  const mediaInfo = getMediaTypeBySlug(type);

  if (!mediaInfo) {
    notFound();
  }

  return (
    <div>
      <h1>Adicionar {mediaInfo.label}</h1>
    </div>
  );
}
