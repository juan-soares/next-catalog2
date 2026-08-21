import { getAttributeTypes } from "@/modules/attribute-type";
import { SubmitActionButton } from "@/components/ui";
import { createAttributeItemAction } from "../../actions";

export function AttributeItemNewForm() {
  const attributeTypeOptions = getAttributeTypes();

  return (
    <form action={createAttributeItemAction}>
      <div>
        <label htmlFor="type">Tipo:</label>
        <select id="type" name="type" required>
          <option hidden defaultValue="">
            Selecione...
          </option>

          {attributeTypeOptions.map(({ key, label }) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>

        <label htmlFor="value">Valor:</label>
        <input type="text" id="value" name="value" required />
      </div>

      <SubmitActionButton
        label="Enviar"
        confirmationMessage="Deseja realmente salvar?"
      />
    </form>
  );
}
