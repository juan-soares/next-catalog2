import Image from "next/image";
import Link from "next/link";
import type { MediaView } from "@/modules/media/types";

type Props = Pick<MediaView, "franchises">;

export function MediaTabFranchises({ franchises }: Props) {
  if (franchises.length === 0)
    return (
      <section>
        <p>Sem registros.</p>
      </section>
    );

  return (
    <section>
      <ul>
        {franchises.map(({ logo, slug, path, title }) => (
          <li key={slug}>
            <Link href={path}>
              <Image src={logo.url} alt={logo.alt} width={60} height={60} />
              <h3>{title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
