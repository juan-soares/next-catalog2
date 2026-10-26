import { File } from "lucide-react";
import type { MediaFilePreview } from "@/modules/media-file/types";

type Props = {
  files: MediaFilePreview[];
};

export function MediaFilewPreviewList({ files }: Props) {
  return (
    <div>
      <strong>Arquivos Selecionados</strong>

      <ul>
        {files.map(({ label, fileType, size }, index) => (
          <li key={index}>
            <File />
            <p>{`${label}.${fileType} - ${size} KB`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
