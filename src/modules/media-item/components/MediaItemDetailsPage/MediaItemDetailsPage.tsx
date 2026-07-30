import Image from "next/image";
import Link from "next/link";
import { MediaItemHeader } from "../MediaItemHeader";
import { MediaItemDetails } from "../../types";

type Props = {
  mediaItemInfo: MediaItemDetails;
};

export function MediaItemsDetailsPage({ mediaItemInfo }: Props) {
  const characters = [
    { name: "Ash", nickname: "", image: "/ash.png", status: "Ativo" },
  ];

  return (
    <div>
      <main>
        <MediaItemHeader {...mediaItemInfo} />
        <div>
          {characters.map(({ name, nickname, image, status }) => (
            <div key={name}>
              <Image
                src={image}
                alt={`Imagem do personagem ${image}.`}
                width={60}
                height={60}
              />
              <h3>{name}</h3>
              <h2>{nickname}</h2>
              <span>{status}</span>
            </div>
          ))}
        </div>

        <div>
          <nav>
            <Link href={`/?tab=ficha-tecnica`}>Ficha Técnica</Link>
            <Link href={`/?tab=personagens`}>Personagens</Link>
            <Link href={`/?tab=temporadas`}>Temporadas</Link>
            <Link href={`/?tab=ovas`}>OVAS</Link>
            <Link href={`/?tab=especiais`}>Especiais</Link>
            <Link href={`/?tab=galeria`}>Galeria</Link>
            <Link href={`/?tab=arquivos`}>Arquivos</Link>
            <Link href={`/?tab=cronologia`}>Cronologia</Link>
            <Link href={`/?tab=franquias`}>Franquias</Link>
          </nav>
          <div>Conteudo</div>
        </div>
      </main>
    </div>
  );
}
