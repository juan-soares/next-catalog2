import { getMediaTypeBySlug } from "@/modules/media-type";

type Props = {
  params: Promise<{ mediaType: string }>;
};

export default async function MediaTypePage({ params }: Props) {
  const { mediaType } = await params;
  const mediaTypeInfo = getMediaTypeBySlug(mediaType);

  return (
    <div>
      <h1>{mediaTypeInfo.label}</h1>
    </div>
  );
}
