type Props = {
  fieldName: string;
  label: string;
  options: { id: string; label: string }[];
};

export function FormSelectField({ fieldName, label, options }: Props) {
  return (
    <div>
      <label htmlFor={fieldName}>{label}</label>
      <select id={fieldName} name={fieldName} defaultValue="" required>
        <option value="" hidden>
          Selecione...
        </option>
        {options.map(({ id, label }) => (
          <option key={id} value={id}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
