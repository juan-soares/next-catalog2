import Image from "next/image";
import Link from "next/link";
import type { MediaDetails } from "@/entities/media/types";

export function MediaGalleryTab({ gallery }: Pick<MediaDetails, "gallery">) {
  return (
    <section>
      {gallery.length === 0 && <p>Nenhuma imagem disponível.</p>}

      <ul>
        {gallery.map((item) => (
          <li key={item.id}>
            <Link href={item.imageUrl}>
              <Image
                src={item.thumbnailUrl}
                alt={item.title}
                width={200}
                height={120}
              />

              <p>{item.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
