import type { Attribute } from "@/modules/attribute/types";
import {
  AttributeEditBtn,
  AttributeDeleteBtn,
} from "@/modules/attribute/components";

type Props = {
  isAdmin: boolean;
  attributes: Attribute[];
};

export function AttributeList({ isAdmin, attributes }: Props) {
  if (!attributes.length)
    return (
      <div>
        <p>Sem itens na lista.</p>
      </div>
    );

  return (
    <div>
      <ul>
        {attributes.map(({ id, label, type }) => (
          <li key={id}>
            <span>{label}</span>

            {isAdmin && (
              <>
                <AttributeEditBtn id={id} />
                <AttributeDeleteBtn id={id} typeCode={type} />
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
