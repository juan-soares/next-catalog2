import Image from "next/image";
import { MediaDetails } from "../../types";

type Props = Pick<
  MediaDetails,
  | "trailer"
  | "cover"
  | "title"
  | "releaseYear"
  | "translatedTitle"
  | "themes"
  | "synopsis"
  | "status"
>;

export function MediaPageHero({
  trailer,
  cover,
  title,
  translatedTitle,
  releaseYear,
  themes,
  synopsis,
  status,
}: Props) {
  return (
    <header>
      <div>
        <video controls autoPlay loop muted playsInline preload="auto">
          <source src={trailer.url} type={trailer.fileType} />
          Seu navegador não suporta a reprodução de vídeos.
        </video>
      </div>

      <div>
        <div>
          <Image src={cover.url} alt={cover.alt} width={60} height={60} />
        </div>

        <div>
          <h1>
            {title} {translatedTitle && <span>{`(${translatedTitle})`}</span>}
          </h1>
          <p>{releaseYear}</p>
          <div>
            {themes.map(({ label }) => (
              <span key={label}>{label}</span>
            ))}
          </div>
          <p>{synopsis}</p>
          <div>
            <button>{status.acquired ? "Adquirido" : "Adquirir"}</button>
            <button>{status.consumed ? "Consumido" : "Consumir"}</button>
          </div>
        </div>
      </div>
    </header>
  );
}
