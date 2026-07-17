import { CatalogItem } from "../../types";
import { CatalogCard } from "../CatalogCard";

type Props = {
  results: CatalogItem[];
  deleteAction: (formData: FormData) => Promise<void>;
};

export function CatalogList({ results, deleteAction }: Props) {
  if (!results.length) {
    return <p>Sem resultados.</p>;
  }

  return (
    <ul>
      {results.map((item) => (
        <CatalogCard key={item.identifier} {...item} deleteAction={deleteAction} />
      ))}
    </ul>
  );
}
