import path from "node:path";
import { mkdir, writeFile } from "node:fs/promises";
import crypto from "node:crypto";
import { slugify } from "@/shared/libs/helpers";
import { requireAdmin } from "@/modules/auth";
import type { Asset, CreateAssetInput } from "@/modules/asset/types";
import { AssetModel } from "@/modules/asset/models";

export async function createAsset(input: CreateAssetInput): Promise<Asset> {
  await requireAdmin();
  const { title, file, module, path: relativePath } = input;

  const extension = path.extname(file.name).toLowerCase();
  const fileName = `${module}-${slugify(title)}-${crypto
    .randomUUID()
    .replaceAll("-", "")}${extension}`;

  const directory = path.join(
    process.cwd(),
    "public",
    relativePath.replace(/^\/+/, ""),
  );

  await mkdir(directory, {
    recursive: true,
  });

  const filePath = path.join(directory, fileName);
  const buffer = Buffer.from(await file.arrayBuffer());
  await writeFile(filePath, buffer);

  return AssetModel.create({
    title,
    fileName,
    extension,
    mimeType: file.type,
    size: file.size,
  });
}
