import { rm } from "node:fs/promises";
import path from "node:path";
import { ASSET_FOLDER_TYPE_REGISTRY } from "@/modules/asset/consts";
import type { AssetFolderTypeCode } from "@/modules/asset/types";

type Props = {
  foldername: string;
  type: AssetFolderTypeCode;
};

export async function deleteAssetFolder({
  foldername,
  type,
}: Props): Promise<void> {
  if (path.basename(foldername) !== foldername) {
    throw new Error("Nome de pasta inválido.");
  }

  const { storage } = ASSET_FOLDER_TYPE_REGISTRY[type];

  const basePath = path.resolve(process.cwd(), storage);
  const folderPath = path.resolve(basePath, foldername);

  if (!folderPath.startsWith(`${basePath}${path.sep}`)) {
    throw new Error("Caminho de pasta inválido.");
  }

  await rm(folderPath, {
    recursive: true,
    force: false,
  });
}
