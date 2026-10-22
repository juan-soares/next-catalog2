import Image from "next/image";
import type { MediaView } from "@/modules/media/types";

type Props = Pick<MediaView, "gallery">;

export function MediaTabGallery({ gallery }: Props) {
  if (gallery.length === 0)
    return (
      <section>
        <p>Sem registros. </p>
      </section>
    );

  return (
    <section>
      <ul>
        {gallery.map(({ url, alt }) => (
          <li key={url}>
            <Image src={url} alt={alt} width={60} height={60} />
          </li>
        ))}
      </ul>
    </section>
  );
}
