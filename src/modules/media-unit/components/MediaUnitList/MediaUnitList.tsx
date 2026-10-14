import { MediaUnit } from "@/modules/media-unit/types";
import Link from "next/link";

type Props = {
  createPath: string;
  mediaUnits: MediaUnit[];
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
