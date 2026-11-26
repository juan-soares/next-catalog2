import Image from "next/image";
import Link from "next/link";
import { LanguagesIcon, Gamepad2Icon, TagsIcon } from "lucide-react";
import type { MediaView } from "@/modules/media/types";
import { FormEditBtn } from "@/shared/components";
import { FormDeleteBtn } from "@/shared/components";
import { deleteMediaAction } from "@/modules/media/actions";

type Props = Pick<
  MediaView,
  "id" | "url" | "info" | "attributes" | "franchises" | "status"
>;

export function MediaHeader({
  id,
  url,
  info,
  attributes,
  franchises,
  status,
}: Props) {
  return (
    <header>
      <div>
        {info.trailer && (
          <video autoPlay loop muted playsInline>
            <source src={info.trailer.src} type={info.trailer.type} />
          </video>
        )}
      </div>

      <div>
        <Image
          src={info.cover.src}
          alt={info.cover.alt}
          width={60}
          height={60}
        />

        <div>
          <FormEditBtn url={url} />
          <FormDeleteBtn id={id} deleteAction={deleteMediaAction} />
        </div>

        <div>
          <h1>
            {info.title} <span>{`(${info.release.year})`}</span>
          </h1>
          <h2>{info.translatedTitle}</h2>
        </div>

        <div>
          <p>{info.synopsis}</p>
        </div>

        <div>
          <div>
            <LanguagesIcon />
            {attributes.languages.map(({ label }) => label).join(", ")}
          </div>

          <div>
            <Gamepad2Icon />
            {attributes.genres.map(({ label }) => label).join(", ")}
          </div>

          <div>
            <TagsIcon />
            {attributes.themes.map(({ label }) => label).join(", ")}
          </div>
        </div>

        <div>
          {franchises.main && (
            <Link href={franchises.main.url}>
              <Image
                src={franchises.main.logo.src}
                alt={franchises.main.logo.alt}
                width={60}
                height={60}
              />
            </Link>
          )}
        </div>

        <div>
          <button>{status.acquired ? "Adquirido" : "Adquirir"}</button>
          <button>{status.consumed ? "Consumido" : "Consumir"}</button>
        </div>
      </div>
    </header>
  );
}
