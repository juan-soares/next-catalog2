import { MediaDetails } from "@/modules/media/types";
import Image from "next/image";
import Link from "next/link";

type Props = Pick<MediaDetails, "franchises">;

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
