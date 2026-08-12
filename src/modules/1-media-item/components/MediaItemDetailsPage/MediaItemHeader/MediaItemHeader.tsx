import Image from "next/image";
import { MediaItemDetails } from "../../../types";
import { DeleteActionForm } from "@/components/ui";
import { deleteMediaItemAction } from "../../../actions";

type Props = Pick<
  MediaItemDetails,
  | "trailer"
  | "slug"
  | "cover"
  | "title"
  | "translatedTitle"
  | "releaseYear"
  | "mediaType"
  | "themes"
  | "synopsis"
  | "acquired"
  | "complete"
>;

export function MediaItemHeader({
  trailer,
  slug,
  cover,
  title,
  translatedTitle,
  releaseYear,
  mediaType,
  themes,
  synopsis,
  acquired,
  complete,
}: Props) {
  return (
    <header>
      <section>
        <video controls autoPlay loop muted playsInline>
          <source src={trailer} type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
      </section>

      <section>
        <div>
          <Image
            src={cover}
            alt={`Capa do título ${title}.`}
            width={60}
            height={60}
          />
        </div>
        <div>
          <h1>{title}</h1>
          <DeleteActionForm
            fieldName="slug"
            fieldValue={slug}
            itemType={mediaType.slug}
            deleteAction={deleteMediaItemAction}
          />
          <h2>{translatedTitle}</h2>
          <p>
            {releaseYear} | {mediaType.label}
          </p>
          <ul>
            {themes.map((theme) => (
              <li key={theme}>{theme}</li>
            ))}
          </ul>
          <p>{synopsis}</p>
          <div>
            <button>{acquired ? "Adquirido" : "Adquirir"}</button>
            <button>{complete ? "Completo" : "Incompleto"}</button>
          </div>
        </div>
      </section>
    </header>
  );
}
