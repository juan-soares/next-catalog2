import path from "node:path";
import { unlink } from "node:fs/promises";

export async function deleteAssetFile(url: string): Promise<void> {
  const filePath = path.join(process.cwd(), "public", url.replace(/^\/+/, ""));

  await unlink(filePath).catch((error: NodeJS.ErrnoException) => {
    if (error.code !== "ENOENT") {
      throw error;
    }
  });
}
