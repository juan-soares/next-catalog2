import Image from "next/image";
import { MediaDetails } from "@/modules/media/types";

type Props = Pick<MediaDetails, "gallery">;

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
        {gallery.map(({ id, url, alt }) => (
          <li id={id}>
            <Image src={url} alt={alt} />
          </li>
        ))}
      </ul>
    </section>
  );
}
