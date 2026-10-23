type FileType = "image/jpeg" | "image/png" | "video/mp4" | ".pdf";

type Props = {
  fieldName: string;
  fileType: FileType[];
  label: string;
  required?: boolean;
  multiple?: boolean;
  onChange?: (files: FileList | null) => void;
};

export function FormFileField({
  fieldName,
  fileType,
  label,
  required = false,
  multiple = false,
  onChange,
}: Props) {
  return (
    <>
      <label htmlFor={fieldName}>{label}</label>
      <input
        type="file"
        id={fieldName}
        name={fieldName}
        accept={fileType.join(",")}
        required={required}
        multiple={multiple}
        onChange={(e) => onChange?.(e.currentTarget.files)}
      />
    </>
  );
}
