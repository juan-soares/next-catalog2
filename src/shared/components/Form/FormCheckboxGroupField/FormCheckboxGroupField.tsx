type Props = {
  label: string;
  options: { id: string; label: string }[];
  fieldName: string;
  value: string[];
  onChange: (value: string[]) => void;
};

export function FormCheckboxGroupField({
  label,
  options,
  fieldName,
  value,
  onChange,
}: Props) {
  const handleChange = (id: string, checked: boolean) => {
    onChange(checked ? [...value, id] : value.filter((item) => item !== id));
  };

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
            onChange={(event) => handleChange(id, event.currentTarget.checked)}
          />
          {label}
        </label>
      ))}
    </fieldset>
  );
}
