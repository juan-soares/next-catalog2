type Props = {
  fieldName: string;
  label: string;
  options: { value: string; label: string }[];
};

export function FormSelectField({ fieldName, label, options }: Props) {
  return (
    <div>
      <label htmlFor={fieldName}>{label}</label>

      <select id={fieldName} name={fieldName} defaultValue="" required>
        <option value="" hidden>
          Selecione...
        </option>

        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
