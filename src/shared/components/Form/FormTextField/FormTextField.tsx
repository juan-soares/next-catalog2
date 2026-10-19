type Props = {
  fieldName: string;
  label: string;
  required?: boolean;
};

export function FormTextField({ fieldName, label, required = false }: Props) {
  return (
    <>
      <label htmlFor={fieldName}>{label}:</label>
      <input type="text" id={fieldName} name={fieldName} required={required} />
    </>
  );
}
