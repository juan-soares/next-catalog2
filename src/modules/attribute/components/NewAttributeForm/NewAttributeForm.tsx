import { SubmitActionButton } from "@/components/ui";

export function NewAttributeForm() {
  return (
    <form>
      <label htmlFor="type">Atributo:</label>
      <select id="type" name="type">
        <option hidden value="">
          Selecione...
        </option>
      </select>

      <label htmlFor="value">Valor:</label>
      <input type="text" id="value" name="value" required />

      <SubmitActionButton
        label={"Enviar"}
        confirmationMessage="Deseja salvar?"
      />
    </form>
  );
}
