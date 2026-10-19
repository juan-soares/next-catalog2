type Props = {
  fieldName: string;
  fileType: "image/jpeg" | "video/mp4";
  label: string;
  required?: boolean;
  multiple?: boolean;
};

export function FormFileField({
  fieldName,
  fileType,
  label,
  required = false,
  multiple = false,
}: Props) {
  return (
    <>
      <label htmlFor={fieldName}>{label}</label>
      <input
        type="file"
        id={fieldName}
        name={fieldName}
        accept={fileType}
        required={required}
        multiple={multiple}
      />
    </>
  );
}
