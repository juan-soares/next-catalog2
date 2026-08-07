import { AttributeOption } from "@/modules/attribute";

type Props = {
  fieldName: string;
  label: string;
  options: AttributeOption[];
};

export function AttributeCheckboxField({ fieldName, label, options }: Props) {
  return (
    <>
      <label htmlFor={fieldName}>{label}:</label>
      {options.map(({ id, label }) => (
        <label key={id}>
          <input type="checkbox" name={fieldName} value={id} />
          {label}
        </label>
      ))}
    </>
  );
}
