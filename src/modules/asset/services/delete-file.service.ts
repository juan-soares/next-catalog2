import { unlink } from "node:fs/promises";
import path from "node:path";

import { ASSET_TYPE_REGISTRY } from "@/modules/asset/consts";
import type { AssetTypeCode } from "@/modules/asset/types";

type Props = {
  filename: string;
  type: AssetTypeCode;
};

export async function deleteAsset({ filename, type }: Props): Promise<void> {
  if (path.basename(filename) !== filename) {
    throw new Error("Nome de arquivo inválido.");
  }

  const { storage } = ASSET_TYPE_REGISTRY[type];

  const filePath = path.join(process.cwd(), storage, filename);

  await unlink(filePath);
}
