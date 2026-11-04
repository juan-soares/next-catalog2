import Image from "next/image";
import type { MediaView } from "@/modules/media/types";

export type Props = Pick<
  MediaView,
  "info" | "assets" | "attributes" | "progress"
>;

export function MediaHero({ info, assets, attributes, progress }: Props) {
  return (
    <header>
      <div>
        {assets.trailer && (
          <video controls autoPlay loop muted playsInline preload="auto">
            <source src={assets.trailer.url} type={assets.trailer.fileType} />
            Seu navegador não suporta a reprodução de vídeos.
          </video>
        )}
      </div>

      <div>
        <div>
          <Image
            src={assets.cover.url}
            alt={assets.cover.alt}
            width={60}
            height={60}
          />
        </div>

        <div>
          <h1>
            {info.title}{" "}
            {info.translatedTitle && <span>{`(${info.translatedTitle})`}</span>}
          </h1>

          <p>
            {info.releaseYear} | {info.type.label}
          </p>

          <div>
            {attributes.themes.map(({ label }) => (
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

          <p>{info.synopsis}</p>

          <div>
            <span>{progress.acquired ? "Adquirido" : "Adquirir"}</span>
            <span>{progress.consumed ? "Consumido" : "Consumir"}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
