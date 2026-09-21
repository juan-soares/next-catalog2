type Props = {
  trailer;
  cover;
  title;
  releaseYear;
  type;
  themes;
  synopsis;
  userStatus;
};

export function MediaHero({
  trailer,
  cover,
  title,
  releaseYear,
  type,
  themes,
  synopsis,
  userStatus,
}: Props) {
  return (
    <main>
      {trailer && (
        <div>
          <video autoPlay muted loop playsInline preload="metadata">
            <source src={trailer.url} type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
        </div>
      )}

      <div>
        <div>
          <Image
            src={cover.url}
            alt={cover.alt}
            width={300}
            height={450}
            priority
          />
        </div>

        <div>
          <h1>{title}</h1>

          <p>
            {releaseYear} | {type.label}
          </p>

          {themes.length > 0 && (
            <ul>
              {themes.map((theme) => (
                <li key={theme.id}>{theme.label}</li>
              ))}
            </ul>
          )}

          {synopsis && <p>{synopsis}</p>}

          <div>
            <button type="button">
              {userStatus.acquired ? "Adquirido" : "Adquirir"}
            </button>

            <button type="button">
              {userStatus.consumed ? "Consumido" : "Consumir"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
