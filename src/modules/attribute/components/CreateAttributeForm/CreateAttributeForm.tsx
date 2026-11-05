import Link from "next/link";
import { PUBLIC_URLS } from "@/shared/consts";
import { createAttributeAction } from "@/modules/attribute/actions";
import type { AttributeTypeView } from "@/modules/attribute/types";
import { ATTRIBUTE_TYPE_LIST } from "@/modules/attribute/consts";

type Props = {
  attributeType: AttributeTypeView | null;
};

export function CreateAttributeForm({ attributeType }: Props) {
  return (
    <form action={createAttributeAction}>
      <div>
        <label htmlFor="label">Valor:</label>
        <input id="label" type="text" name="label" required />
      </div>

      <div>
        <label>Tipo:</label>
        <select
          id="typeCode"
          name="typeCode"
          defaultValue={attributeType?.code ?? ""}
          required
        >
          {attributeType ? (
            <option value={attributeType.code}>{attributeType.label}</option>
          ) : (
            <>
              <option value="" hidden>
                Selecione...
              </option>
              {ATTRIBUTE_TYPE_LIST.map(({ code, label }) => (
                <option key={code} value={code}>
                  {label}
                </option>
              ))}
            </>
          )}
        </select>
      </div>

      <button type="submit">Enviar</button>
      <Link href={PUBLIC_URLS.ATTRIBUTES.LIST}>Lista</Link>
    </form>
  );
}
