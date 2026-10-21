type Props = {
  label: string;
  options: { id: string; label: string }[];
  fieldName: string;
  value: string[];
};

export function FormCheckboxGroupField({
  label,
  options,
  fieldName,
  value,
}: Props) {
  return (
    <fieldset>
      <legend>{label}</legend>

      {options.map(({ id, label }) => (
        <label key={id}>
          <input
            type="checkbox"
            name={fieldName}
            value={id}
            checked={value.includes(id)}
          />
          {label}
        </label>
      ))}
    </fieldset>
  );
}
