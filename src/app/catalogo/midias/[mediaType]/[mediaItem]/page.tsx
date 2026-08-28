import {
  MediaItemPageHero,
  MediaItemPageTabs,
} from "@/features/media-item-page";
import {
  Loader,
  Loader2,
  Loader2Icon,
  LoaderCircle,
  LoaderCircleIcon,
} from "lucide-react";

type Props = {
  params: Promise<{
    mediaType: string;
    mediaItem: string;
  }>;

  searchParams: Promise<{
    currentTab: string;
  }>;
};

export default async function MediaItemPage({ params, searchParams }: Props) {
  const { mediaType, mediaItem } = await params;
  const { currentTab } = await searchParams;

  const mediaItemInfo = {
    trailer: "/teste.mp4",
    cover: "/capa.png",
    title: "naruto",
    releaseYear: 2020,
    mediaType: "Animes",
    themes: ["Ação"],
    synopsis:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem quasi ab cupiditate deleniti fuga eos, aut fugiat, possimus molestias eligendi eius vel quisquam corporis expedita a, inventore id recusandae! Animi.",
    acquired: false,
    completed: false,
    mediaTypeTabs: [
      {
        label: "Ficha Técnica",
        value: "info",
      },
      {
        label: "Temporadas",
        value: "temporadas",
      },
    ],
  };

  return (
    <div>
      <MediaItemPageHero {...mediaItemInfo} />
      <MediaItemPageTabs
        mediaTypeTabs={mediaItemInfo.mediaTypeTabs}
        currentTab={currentTab}
      />
    </div>
  );
}
