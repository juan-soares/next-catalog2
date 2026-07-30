import { MediaItemDetails, MediaItemsDetailsPage } from "@/modules/media-item";

export default function MediaItemPage() {
  const mediaItemInfo: MediaItemDetails = {
    trailer: "/trailer.mp4",
    cover: "/cover.jpg",
    title: "Teste",
    translatedTitle: "Teste 2",
    releaseYear: "2020",
    mediaType: "Animes",
    themes: ["acao"],
    sinopsys:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit ullam necessitatibus maiores dolores incidunt architecto at nemo, accusantium fugit aspernatur id provident! Totam saepe molestias porro, quas doloribus expedita maiores!",
    acquired: false,
    complete: false,
  };

  return <MediaItemsDetailsPage mediaItemInfo={mediaItemInfo} />;
}
