import Link from "next/link";
import { MediaItemHeader } from "../MediaItemHeader";
import { MediaItemDetails } from "../../types";
import { MediaItemCharactersbar } from "../MediaItemCharactersbar";

type Props = {
  mediaItemInfo: MediaItemDetails;
};

export function MediaItemDetailsPage({ mediaItemInfo }: Props) {
  return (
    <div>
      <main>
        <MediaItemHeader {...mediaItemInfo} />
        <MediaItemCharactersbar {...mediaItemInfo} />

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
