import { Dispatch } from "react";

type Props = {
  fieldName: string;
  label: string;
  options: { value: string; label: string }[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export function FormSelectField({
  fieldName,
  label,
  options,
  onChange,
}: Props) {
  return (
    <div>
      <label htmlFor={fieldName}>{label}</label>

      <select
        id={fieldName}
        name={fieldName}
        defaultValue=""
        required
        onChange={onChange}
      >
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
