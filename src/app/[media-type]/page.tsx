import { MediaList } from "@/modules/media/components";

type Props = {
  params: Promise<{ "media-type": string }>;
};

export default async function MediaTypePage({ params }: Props) {
  const { "media-type": mediaTypeSlug } = await params;

  return (
    <div>
      <h1>{mediaTypeSlug}</h1>

      <MediaList medias={[]} />
    </div>
  );
}
