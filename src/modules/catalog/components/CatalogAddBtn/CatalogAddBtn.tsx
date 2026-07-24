import Link from "next/link";

type Props = {
  pathName: string;
};

export function CatalogAddBtn({ pathName }: Props) {
  return (
    <div>
      <Link href={`${pathName}/novo`}>Adicionar Mídia</Link>
      <Link href={`/catalogo/atributos/novo`}>Adicionar Atributo</Link>
    </div>
  );
}
