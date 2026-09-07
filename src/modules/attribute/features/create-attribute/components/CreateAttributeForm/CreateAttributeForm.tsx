import { FormButton } from "@/components/ui";
import { ATTRIBUTE_TYPES_LIST } from "@/modules/attribute/domain";
import { createAttributeAction } from "../../create-attribute.action";

export function CreateAttributeForm() {
  return (
    <form action={createAttributeAction}>
      <label htmlFor="type">Tipo:</label>
      <select id="type" name="type" required>
        <option value="" hidden>
          Selecione...
        </option>

        {ATTRIBUTE_TYPES_LIST.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>

      <label htmlFor="label">Valor:</label>
      <input id="label" name="label" required />

      <FormButton actionLabel="salvar">Salvar</FormButton>
    </form>
  );
}
