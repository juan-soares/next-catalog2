type Props = {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  options: { id: string; title: string }[];
};

export function FormSelect({ id, name, label, required, options }: Props) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} required={required}>
        <option hidden value="">
          Selecione...
        </option>

        {options.map(({ id, title: label }) => (
          <option key={id} value={id}>
            {label}
          </option>
        ))}
      </select>
    </>
  );
}
