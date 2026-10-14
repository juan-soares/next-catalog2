import { MediaDetails } from "@/modules/media/types";
import { File } from "lucide-react";

type Props = Pick<MediaDetails, "files">;

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
        {files.map(({ fileName, label, fileType, fileSize }) => (
          <li key={fileName}>
            <File />
            <p>{`${label} • ${fileType} • ${fileSize}`}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
