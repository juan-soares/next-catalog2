import { getAttributeTypes } from "@/modules/attribute-type";
import { SubmitFormButton } from "@/components/ui";

type Props = {
  action: (formData: FormData) => void | Promise<void>;
  initialData?: {
    id?: string;
    attributeType?: string;
    label?: string;
  };
};

export function AttributeItemForm({ action, initialData }: Props) {
  const attributeTypeOptions = getAttributeTypes();

  return (
    <form action={action}>
      {initialData?.id && (
        <input type="hidden" name="id" value={initialData.id} />
      )}

      <div>
        <label htmlFor="type">Tipo:</label>
        <select
          id="type"
          name="attributeType"
          required
          defaultValue={initialData?.attributeType ?? ""}
        >
          <option hidden defaultValue="">
            Selecione...
          </option>

          {attributeTypeOptions.map(({ key, label }) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>

        <label htmlFor="label">Valor:</label>
        <input
          type="text"
          id="label"
          name="label"
          required
          defaultValue={initialData?.label ?? ""}
        />
      </div>

      <SubmitFormButton />
    </form>
  );
}
