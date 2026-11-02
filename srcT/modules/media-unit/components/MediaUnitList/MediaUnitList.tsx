import Link from "next/link";
import type { MediaUnitView } from "@/modules/media-unit/types";

type Props = {
  createPath: string;
  mediaUnits: MediaUnitView[];
};

export function MediaUnitList({ createPath, mediaUnits }: Props) {
  if (mediaUnits.length === 0)
    return (
      <p>
        Sem registros. <Link href={createPath}>Adicionar?</Link>
      </p>
    );

  return (
    <ul>
      {mediaUnits.map(
        ({ id, number, title, status: { acquired, consumed } }) => (
          <li key={id}>
            <p>
              {`${number}. ${title}`}{" "}
              <button>{acquired ? "Adquirido" : "Adquirir"}</button>{" "}
              <button>{consumed ? "Consumido" : "Consumir"}</button>
            </p>
          </li>
        ),
      )}
    </ul>
  );
}
