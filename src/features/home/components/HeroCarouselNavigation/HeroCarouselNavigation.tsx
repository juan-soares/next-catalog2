type Props = {
  itemCount: number;
  currentIndex: number;
  onSelect: (index: number) => void;
};

export function HeroCarouselNavigation({
  itemCount,
  currentIndex,
  onSelect,
}: Props) {
  return (
    <nav aria-label="Navegação do carrossel">
      {Array.from({ length: itemCount }, (_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`Exibir item ${index + 1}`}
          aria-current={currentIndex === index ? "true" : undefined}
          onClick={() => onSelect(index)}
        />
      ))}
    </nav>
  );
}
