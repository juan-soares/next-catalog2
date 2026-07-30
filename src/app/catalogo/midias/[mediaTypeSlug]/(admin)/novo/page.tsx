import { getMediaTypeConfigBySlug } from "@/modules/media-type";

type Props = {
  params: Promise<{ mediaTypeSlug: string }>;
};

export default async function NewMediaItemPage({ params }: Props) {
  const { mediaTypeSlug } = await params;
  const mediaTypeConfig = getMediaTypeConfigBySlug(mediaTypeSlug);

  const {
    label,
    admin: { NewMediaItemForm },
  } = mediaTypeConfig;

  return (
    <main>
      <h1>Adicionar {label}</h1>
      <NewMediaItemForm />
    </main>
  );
}
