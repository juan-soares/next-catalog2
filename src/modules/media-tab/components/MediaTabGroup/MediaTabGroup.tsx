import Link from "next/link";
import { MediaTabDetails } from "@/modules/media-tab/types";

type Props = Pick<MediaTabDetails, "mediaTypePath" | "mediaSlug" | "groupType">;

export function MediaTabGroup({ mediaTypePath, mediaSlug, groupType }: Props) {
  const groups = [];

  if (groups.length === 0)
    return (
      <section>
        Sem registros.{" "}
        <Link href={`${mediaTypePath}/${mediaSlug}/adicionar/`}>
          Adicionar?
        </Link>
      </section>
    );

  return (
    <ul>
      {groups.map((group) => (
        <li key={group.id}>
          <article>{group.title}</article>
        </li>
      ))}
    </ul>
  );
}
