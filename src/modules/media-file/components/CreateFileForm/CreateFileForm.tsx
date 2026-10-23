"use client";

export function CreateFileForm() {
  const [showingForm, setShowingForm] = useState<boolean>(false);

  return (
    <FormSection>
      {!showingForm && <button>Incluir Arquivo</button>}

      {showingForm && (
        <div>
          <FormFileField
            fieldName="files"
            fileType={["image/jpeg", "image/png", "video/mp4", ".pdf"]}
            label="Selecionar Arquivo"
            onChange={}
          />
        </div>
      )}
    </FormSection>
  );
}
