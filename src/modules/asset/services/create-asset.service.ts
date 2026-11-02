import type { AssetData, AssetTypeCode } from "@/modules/asset/types";

type Props = {
  parentLabel: string;
  identifier: string;
  type: AssetTypeCode;
  file: File;
};

export function createAsset({
  parentLabel,
  identifier,
  type,
  file,
}: Props): AssetData {
  const extension = file.name.split(".").pop()?.toLowerCase();
  const labels: Record<AssetTypeCode, string> = {
    cover: `Capa da mídia ${parentLabel}.`,
    trailer: `Trailer da mídia ${parentLabel}.`,
    file: `Arquivo da mídia ${parentLabel}.`,
    image: `Imagem da mídia ${parentLabel}.`,
    logo: `Logo da franquia ${parentLabel}.`,
  };

  const filename = `${identifier}-${type}.${extension}`;

  return {
    label: labels[type],
    filename,
    path: `/${filename}`,
    mimeType: file.type,
    size: file.size,
  };
}
