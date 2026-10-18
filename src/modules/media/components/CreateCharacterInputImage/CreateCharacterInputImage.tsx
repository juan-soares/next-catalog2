"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function CreateCharacterInputImage({ file }: { file: File }) {
  const [src, setSrc] = useState("");

  useEffect(() => {
    const url = URL.createObjectURL(file);
    setSrc(url);

    return () => URL.revokeObjectURL(url);
  }, [file]);

  if (!src) return null;

  return (
    <Image
      src={src}
      alt={`Imagem do personagem`}
      width={80}
      height={80}
      unoptimized
    />
  );
}
