import Image from "next/image";
import Link from "next/link";
import type { MediaDetails } from "@/modules/media/types";

export function MediaFranchisesTab({
  franchises,
}: Pick<MediaDetails, "franchises">) {
  return (
    <section>
      {franchises.length === 0 && <p>Nenhuma franquia relacionada.</p>}

      <ul>
        {franchises.map((franchise) => (
          <li key={franchise.id}>
            <Link href={`/franchises/${franchise.id}`}>
              <Image
                src={franchise.logo.url}
                alt={franchise.logo.alt}
                width={100}
                height={100}
              />

              <p>{franchise.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
