import Image from "next/image";
import Link from "next/link";

export async function MediaDetailsPage() {
  const trailer = "/video";
  const cover = "/cover";
  const title = "Teste";
  const translatedTitle = "";
  const releaseYear = "2024";
  const typeLabel = "Animes";
  const themes = [{ id: "1", label: "Aventura" }];
  const synopsis = "Lorem LoremLoremLoremLoremLorem";
  const acquired = false;
  const consumed = false;
  const seasons = [
    {
      id: "12",
      releaseYear: "2024",
      number: 1,
      title: "Era uma vez",
      resolutionLabel: "1080p",
      languageLabel: "Portugues",
      episodes: [
        {
          id: "1",
          number: 1,
          title: "Era agora.",
          acquired: false,
          consumed: true,
        },
      ],
    },
  ];

  return (
    <div>
      <main>
        <div>
          <video autoPlay muted loop playsInline>
            <source src={trailer} type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
        </div>

        <div>
          <div>
            <Image src={cover} alt={`Capa de ${title}.`} />
          </div>

          <div>
            <h1>{title}</h1>

            <p>
              {releaseYear} | {typeLabel}
            </p>

            <ul>
              {themes.map(({ id, label }) => (
                <li key={id}>{label}</li>
              ))}
            </ul>

            <p>{synopsis}</p>

            <div>
              <button>{acquired ? "Adquirido" : "Adquirir"}</button>
              <button>{consumed ? "Consumido" : "Consumir"}</button>
            </div>
          </div>
        </div>
      </main>

      <div>
        <nav>
          <Link href="tab=info">Ficha Técnica</Link>
          <Link href="tab=seasons">Temporadas</Link>
          <Link href="tab=ovas">OVAS</Link>
          <Link href="tab=specials">Especiais</Link>
          <Link href="tab=specials">Galeria</Link>
          <Link href="tab=specials">Arquivos</Link>
          <Link href="tab=specials">Continuidade</Link>
          <Link href="tab=specials">Franquias</Link>
        </nav>

        <main>
          <p>Título: {title}</p>
          <p>Título Traduzido: {translatedTitle}</p>
          <p>Laçamento: {translatedTitle}</p>
        </main>

        <main>
          <ul>
            {seasons.map(
              ({
                id,
                releaseYear,
                number,
                title,
                resolutionLabel,
                languageLabel,
                episodes,
              }) => (
                <li key={id}>
                  <Link href={`tab=seasons&n=${id}`}>
                    {`(${releaseYear}) ${number}° Temporada: ${title} [${resolutionLabel}] (${languageLabel})`}
                  </Link>

                  <ul>
                    {episodes.map(({ id, number, title }) => (
                      <li key={id}>
                        <p>
                          {`EP.${number}: - ${title}`}{" "}
                          <span>{acquired ? "OK" : "!OK"}</span>
                          <span>{consumed ? "OK" : "!OK"}</span>
                        </p>
                      </li>
                    ))}
                  </ul>
                </li>
              ),
            )}
          </ul>
        </main>
      </div>
    </div>
  );
}
