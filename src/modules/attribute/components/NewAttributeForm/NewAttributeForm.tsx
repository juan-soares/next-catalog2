import { SubmitActionButton } from "@/components/ui";
import { ATTRIBUTE_TYPES } from "../../consts";
import { createAttributeAction } from "../../actions";

export function NewAttributeForm() {
  return (
    <form action={createAttributeAction}>
      <label htmlFor="attributeType">Atributo:</label>
      <select id="attributeType" name="attributeType">
        <option hidden value="">
          Selecione...
        </option>

        {ATTRIBUTE_TYPES.map(({ key, label }) => (
          <option key={key} value={key}>
            {label}
          </option>
        ))}
      </select>

      <label htmlFor="value">Valor:</label>
      <input type="text" id="value" name="value" required />

      <SubmitActionButton
        label={"Enviar"}
        confirmationMessage="Salvar novo Atributo?"
      />
    </form>
  );
}
