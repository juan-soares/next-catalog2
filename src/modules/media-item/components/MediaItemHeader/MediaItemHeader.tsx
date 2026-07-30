import Image from "next/image";
import { MediaItemDetails } from "../../types";

type Props = Pick<
  MediaItemDetails,
  | "trailer"
  | "cover"
  | "title"
  | "translatedTitle"
  | "releaseYear"
  | "mediaType"
  | "themes"
  | "sinopsys"
  | "acquired"
  | "complete"
>;

export function MediaItemHeader({
  trailer,
  cover,
  title,
  translatedTitle,
  releaseYear,
  mediaType,
  themes,
  sinopsys,
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
          <h2>{translatedTitle}</h2>
          <p>
            {releaseYear} | {mediaType}
          </p>
          <div>
            {themes.map((theme) => (
              <span key={theme}>{theme}</span>
            ))}
          </div>
          <p>{sinopsys}</p>
          <div>
            <button>{acquired ? "Adquirido" : "Adquirir"}</button>
            <button>{complete ? "Completo" : "Incompleto"}</button>
          </div>
        </div>
      </section>
    </header>
  );
}
