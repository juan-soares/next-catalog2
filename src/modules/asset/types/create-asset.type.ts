export type CreateAssetData = {
  title: string;
  fileName: string;
  extension: string;
  mimeType: string;
  size: number;
  url: string;
};

export type AssetStorage = {
  directory: string;
  url: string;
};

export type CreateAssetInput = {
  title: string;
  file: File;
  module: string;
  storage: AssetStorage;
};

export type CreateAssetFileResult = {
  fileName: string;
  url: string;
};
