import { getMediasDetailsByType, MediaCard } from "@/modules/media";
import { MediaTypeSortbar } from "@/modules/media-type/components";
import type { MediaTypeCode } from "@/modules/media-type/types";

type Props = {
  typeCode: MediaTypeCode;
};

export async function MediaTypeList({ typeCode }: Props) {
  const medias = await getMediasDetailsByType(typeCode);

  return (
    <div>
      <MediaTypeSortbar />
      {medias.map((media) => (
        <MediaCard {...media} />
      ))}
    </div>
  );
}
