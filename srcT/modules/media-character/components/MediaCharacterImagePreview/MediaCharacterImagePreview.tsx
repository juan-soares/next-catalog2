"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  file: File | null;
  name: string;
};

export function MediaCharacterImagePreview({ file, name }: Props) {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    if (!file) {
      setSrc(null);
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setSrc(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  return (
    <Image
      src={src ?? "/assets/icons/no-image.png"}
      alt={`Imagem de ${name}`}
      width={60}
      height={60}
    />
  );
}
