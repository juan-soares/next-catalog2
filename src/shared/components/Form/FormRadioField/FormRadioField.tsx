type Props<K extends string, V extends string> = {
  fieldName: K;
  label: string;
  currentValue: V;
  required?: boolean;
  options: { value: V; label: string }[];
  onChange?: (fieldName: K, value: V) => void;
};

export function FormRadioField<K extends string, V extends string>({
  label,
  fieldName,
  options,
  currentValue,
  required = false,
  onChange,
}: Props<K, V>) {
  return (
    <>
      <label>{label}:</label>

      {options.map(({ value, label }) => (
        <label key={value}>
          <input
            type="radio"
            name={fieldName}
            value={value}
            onChange={() => onChange?.(fieldName, value)}
            checked={currentValue === value}
            required={required}
          />
          {label}
        </label>
      ))}
    </>
  );
}
