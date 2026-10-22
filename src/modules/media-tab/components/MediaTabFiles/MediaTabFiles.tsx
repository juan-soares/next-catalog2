import { File } from "lucide-react";
import type { MediaView } from "@/modules/media/types";

type Props = Pick<MediaView, "files">;

export function MediaTabFiles({ files }: Props) {
  if (files.length === 0)
    return (
      <section>
        <p>Sem registros.</p>
      </section>
    );

  return (
    <section>
      <ul>
        {files.map(({ label, fileType, size }) => (
          <li key={label}>
            <File />
            <p>{`${label} • ${fileType} • ${size} KB`}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
