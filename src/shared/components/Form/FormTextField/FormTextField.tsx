type Props<K extends string> = {
  fieldName: K;
  label: string;
  required?: boolean;
  value: string;
  onChange?: (fieldName: K, value: string) => void;
};

export function FormTextField<K extends string>({
  fieldName,
  label,
  required = false,
  value,
  onChange,
}: Props<K>) {
  return (
    <>
      <label htmlFor={fieldName}>{label}:</label>
      <input
        type="text"
        id={fieldName}
        name={fieldName}
        required={required}
        value={value}
        onChange={(e) => onChange?.(fieldName, e.currentTarget.value)}
      />
    </>
  );
}
