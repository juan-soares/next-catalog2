import Image from "next/image";

type Props = {
  trailer: string;
  cover: string;
  title: string;
  releaseYear: number;
  mediaType: { label: string; slug: string };
  themes: string[];
  synopsis: string;
  acquired: boolean;
  completed: boolean;
};

export function MediaItemPageHero({
  trailer,
  cover,
  title,
  releaseYear,
  mediaType,
  themes,
  synopsis,
  acquired,
  completed,
}: Props) {
  return (
    <header>
      <section>
        <video autoPlay muted loop playsInline poster={cover}>
          <source src={trailer} type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>
      </section>

      <section>
        <div>
          <Image
            src={cover}
            alt={`Capa do título ${title}.`}
            width={60}
            height={60}
          />
        </div>

        <div>
          <h1>{title}</h1>
          <p>
            {releaseYear} | {mediaType.label}
          </p>
          {themes.map((theme) => (
            <span key={theme}>{theme}</span>
          ))}
          <p>{synopsis}</p>

          <div>
            <button>{acquired ? "Adquirido" : "Adquirir"}</button>
            <button>{completed ? "Ver" : "Visto"}</button>
          </div>
        </div>
      </section>
    </header>
  );
}
