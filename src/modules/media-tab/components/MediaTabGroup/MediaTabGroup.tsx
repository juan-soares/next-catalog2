import Link from "next/link";
import Image from "next/image";
import type { MediaGroupView } from "@/modules/media-group/types";
import { MediaUnitList } from "@/modules/media-unit/components";

type Props = {
  group: MediaGroupView[];
  createPath: string;
};

export function MediaTabGroup({ group, createPath }: Props) {
  if (group.length === 0) {
    return (
      <p>
        Sem registros. <Link href={createPath}>Adicionar?</Link>
      </p>
    );
  }

  return (
    <ul>
      {group.map((groupItem) => (
        <li key={groupItem.id}>
          <article>
            <aside>
              {groupItem.trailer && (
                <video controls loop muted playsInline preload="metadata">
                  <source
                    src={groupItem.trailer.url}
                    type={groupItem.trailer.fileType}
                  />
                  Seu navegador não suporta a reprodução de vídeos.
                </video>
              )}

              <Image
                src={groupItem.cover.url}
                alt={groupItem.cover.alt}
                width={60}
                height={60}
              />
            </aside>

            <main>
              <header>
                {groupItem.groupType.label} {groupItem.number} •{" "}
                {groupItem.releaseYear} • [
                {groupItem.resolution?.label ?? "N/A"}] (
                {groupItem.language.label})
              </header>
              <h2>
                {groupItem.title}{" "}
                {groupItem.translatedTitle && (
                  <span>{`(${groupItem.translatedTitle})`}</span>
                )}
              </h2>

              <p>{groupItem.synopsis}</p>

              <button>Detalhes</button>
            </main>

            <div>
              <MediaUnitList
                createPath={`${createPath}/${groupItem.id}`}
                mediaUnits={
                  groupItem.episodes ||
                  groupItem.tracks ||
                  groupItem.volumes ||
                  []
                }
              />
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
