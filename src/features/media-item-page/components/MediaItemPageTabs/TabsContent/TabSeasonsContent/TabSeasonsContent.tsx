import { DeleteFormButton } from "@/components/ui";
import { MEDIA_TYPE_CATALOG_PATH } from "@/consts/paths";
import { MediaItemPageSeason } from "@/features/media-item-page/types";
import { deleteMediaItemAction } from "@/modules/media-item/actions";
import { Edit } from "lucide-react";
import Link from "next/link";

type Props = {
  hasUser: boolean;
  mediaTypeSlug: string;
  id: string;
  seasons: MediaItemPageSeason[];
};

export function TabSeasonsContent({
  hasUser,
  mediaTypeSlug,
  id,
  seasons,
}: Props) {
  return (
    <div>
      {hasUser && (
        <Link
          href={`${MEDIA_TYPE_CATALOG_PATH + mediaTypeSlug}/${id}/temporadas/novo`}
        >
          Adicionar Temporada
        </Link>
      )}

      {!seasons.length && <p>Sem temporadas.</p>}
      <ul>
        {seasons.map((season) => (
          <li key={season.number}>
            ({season.releaseYear}) {season.number}ª Temporada - {season.title} [
            {season.languages.join(", ")}] ({season.resolutions.join(", ")})
            <span>{season.acquired ? "Adquirido" : "Adquirir"}</span>
            <span>{season.watched ? "Visto" : "Ver"}</span>
            {hasUser && (
              <>
                <Link
                  href={`${MEDIA_TYPE_CATALOG_PATH + mediaTypeSlug}/${id}/temporadas/${season.id}/editar`}
                >
                  <Edit />
                </Link>
                <DeleteFormButton
                  deleteAction={deleteMediaItemAction}
                  id={season.id}
                />
              </>
            )}
            <div>
              {hasUser && (
                <Link
                  href={`${MEDIA_TYPE_CATALOG_PATH + mediaTypeSlug}/${id}/temporadas/${season.id}/episodios/novo`}
                >
                  Adicionar Episódio
                </Link>
              )}
              <ul>
                {season.episodes.map((episode) => (
                  <li key={episode.number}>
                    ({episode.releaseYear}) EP.{episode.number} -{" "}
                    {episode.title}
                    <span>{episode.acquired ? "Adquirido" : "Adquirir"}</span>
                    <span>{episode.watched ? "Visto" : "Ver"}</span>
                    {hasUser && (
                      <>
                        <Link
                          href={`${MEDIA_TYPE_CATALOG_PATH + mediaTypeSlug}/${id}/temporadas/${season.id}/episodios/${episode.id}/editar`}
                        >
                          <Edit />
                        </Link>
                        <DeleteFormButton
                          deleteAction={deleteMediaItemAction}
                          id={episode.id}
                        />
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
