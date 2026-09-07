type Props = {
  label: string;
  total: number;
};

export function AttributeTypeOverviewCard({ label, total }: Props) {
  return (
    <div>
      <strong>{label}:</strong> <span>{total}</span>
    </div>
  );
}
