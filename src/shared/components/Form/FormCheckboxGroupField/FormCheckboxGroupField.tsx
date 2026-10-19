type Props = {
  label: string;
  options: { id: string; label: string }[];
  fieldName: string;
};

export function FormCheckboxGroupField({ label, options, fieldName }: Props) {
  return (
    <div>
      <label>{label}</label>
      {options.map(({ id, label }) => (
        <label key={id}>
          <input type="checkbox" value={id} name={fieldName} />
          {label}
        </label>
      ))}
    </div>
  );
}
