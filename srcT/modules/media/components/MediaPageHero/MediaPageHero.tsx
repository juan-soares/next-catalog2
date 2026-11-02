import Image from "next/image";
import type { MediaView } from "@/modules/media/types";

type Props = Pick<
  MediaView,
  | "trailer"
  | "cover"
  | "title"
  | "releaseYear"
  | "type"
  | "translatedTitle"
  | "themes"
  | "synopsis"
  | "franchises"
  | "status"
>;

export function MediaPageHero({
  trailer,
  cover,
  title,
  translatedTitle,
  releaseYear,
  type,
  themes,
  synopsis,
  franchises,
  status,
}: Props) {
  return (
    <header>
      <div>
        {trailer && (
          <video controls autoPlay loop muted playsInline preload="auto">
            <source src={trailer.url} type={trailer.fileType} />
            Seu navegador não suporta a reprodução de vídeos.
          </video>
        )}
      </div>

      <div>
        <div>
          <Image src={cover.url} alt={cover.alt} width={60} height={60} />
        </div>

        <div>
          <h1>
            {title} {translatedTitle && <span>{`(${translatedTitle})`}</span>}
          </h1>
          <p>
            {releaseYear} | {type.label}
          </p>
          <div>
            {themes.map(({ label }) => (
              <span key={label}>{label}</span>
            ))}
          </div>
          <div>
            {franchises.map(({ logo, title }) => (
              <span key={title}>
                <Image src={logo.url} alt={logo.alt} width={60} height={60} />
                <strong>{title}</strong>
              </span>
            ))}
          </div>
          <p>{synopsis}</p>
          <div>
            <span>{status.acquired ? "Adquirido" : "Adquirir"}</span>
            <span>{status.consumed ? "Consumido" : "Consumir"}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
