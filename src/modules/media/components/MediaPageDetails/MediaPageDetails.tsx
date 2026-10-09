import { MediaDetails } from "@/modules/media/types";
import Image from "next/image";

type Props = {
  media: MediaDetails;
  currentTab: string;
};

export function MediaPageDetails({ media, currentTab }: Props) {
  const {
    title,
    translatedTitle,
    releaseYear,
    themes,
    trailer,
    cover,
    synopsis,
    status,
  } = media;

  return (
    <div></div>
  );
}
