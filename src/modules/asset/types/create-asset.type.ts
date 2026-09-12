export type CreateAssetData = {
  title: string;
  fileName: string;
  extension: string;
  mimeType: string;
  size: number;
};

export type CreateAssetInput = {
  title: string;
  file: File;
  module: string;
  path: string;
};
