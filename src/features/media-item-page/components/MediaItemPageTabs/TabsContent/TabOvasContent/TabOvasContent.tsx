import { DeleteFormButton } from "@/components/ui";
import { MEDIA_TYPE_CATALOG_PATH } from "@/consts/paths";
import { MediaItemPageOva } from "@/features/media-item-page/types";
import { deleteMediaItemAction } from "@/modules/media-item/actions";
import { Edit } from "lucide-react";
import Link from "next/link";

type Props = {
  hasUser: boolean;
  mediaTypeSlug: string;
  id: string;
  ovas: MediaItemPageOva[];
};

export function TabOvasContent({ hasUser, mediaTypeSlug, id, ovas }: Props) {
  return (
    <div>
      {hasUser && (
        <Link
          href={`${MEDIA_TYPE_CATALOG_PATH + mediaTypeSlug}/${id}/ovas/novo`}
        >
          Adicionar OVA
        </Link>
      )}

      {!ovas.length && <p>Sem OVAs.</p>}
      <ul>
        {ovas.map((ova) => (
          <li key={ova.number}>
            ({ova.releaseYear}) {ova.number}ª OVA - {ova.title} [
            {ova.languages.join(", ")}] ({ova.resolutions.join(", ")})
            <span>{ova.acquired ? "Adquirido" : "Adquirir"}</span>
            <span>{ova.watched ? "Visto" : "Ver"}</span>
            {hasUser && (
              <>
                <Link
                  href={`${MEDIA_TYPE_CATALOG_PATH + mediaTypeSlug}/${id}/temporadas/${ova.id}/editar`}
                >
                  <Edit />
                </Link>
                <DeleteFormButton
                  deleteAction={deleteMediaItemAction}
                  id={ova.id}
                />
              </>
            )}
            <div>
              {hasUser && (
                <Link
                  href={`${MEDIA_TYPE_CATALOG_PATH + mediaTypeSlug}/${id}/temporadas/${ova.id}/episodios/novo`}
                >
                  Adicionar Episódio
                </Link>
              )}
              <ul>
                {ova.episodes.map((episode) => (
                  <li key={episode.number}>
                    ({episode.releaseYear}) EP.{episode.number} -{" "}
                    {episode.title}
                    <span>{episode.acquired ? "Adquirido" : "Adquirir"}</span>
                    <span>{episode.watched ? "Visto" : "Ver"}</span>
                    {hasUser && (
                      <>
                        <Link
                          href={`${MEDIA_TYPE_CATALOG_PATH + mediaTypeSlug}/${id}/temporadas/${ova.id}/episodios/${episode.id}/editar`}
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
