import Image from "next/image";
import Link from "next/link";
import { Globe, Pencil, Shapes, Trash } from "lucide-react";
import type { MediaView } from "@/modules/media/types";
import { deleteMediaAction } from "@/modules/media/actions";
import { FranchiseLogo } from "@/modules/franchise/components";

export type Props = Pick<
  MediaView,
  "identifiers" | "info" | "assets" | "attributes" | "progress"
>;

export function MediaHero({
  identifiers,
  info,
  assets,
  attributes,
  progress,
}: Props) {
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

          <div>
            <Link href={`${identifiers.path}/editar`}>
              <Pencil />
            </Link>

            <form action={deleteMediaAction}>
              <input type="hidden" name="id" value={identifiers.id} />
              <input type="hidden" name="typeSlug" value={info.type.slug} />

              <button type="submit">
                <Trash />
              </button>
            </form>
          </div>

          <p>
            {info.releaseYear} | {info.type.label}
          </p>

          <div>
            <Globe />
            {attributes.languages.map(({ label }) => (
              <span key={label}>{label}</span>
            ))}
          </div>

          <div>
            <Shapes />
            {attributes.themes.map(({ label }) => (
              <span key={label}>{label}</span>
            ))}
          </div>

          <div>
            {attributes.franchises.map((franchise) => (
              <FranchiseLogo
                key={franchise.id}
                {...franchise}
                width={60}
                height={60}
              />
            ))}
          </div>

          <p>{info.synopsis}</p>

          <form>
            <div>
              <input type="hidden" name="id" value={identifiers.id} />

              <input
                type="hidden"
                name="acquired"
                value={String(progress.acquired)}
              />

              <input
                type="hidden"
                name="consumed"
                value={String(progress.consumed)}
              />
            </div>

            <div>
              <button type="submit">
                {progress.acquired ? "Adquirido" : "Adquirir"}
              </button>

              <button type="submit">
                {progress.consumed ? "Consumido" : "Consumir"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}
