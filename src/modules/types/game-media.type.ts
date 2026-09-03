export type GameType = {
  genreIds: string[];
  minPlayers: number;
  maxPlayers: number;

  edition: string;
  parentId?: string;
};

//<-->

export type VideoGameMediaType = GameType & {
  platformIds: string[];
  gameplayStyleIds: string;
};

export type BoardGameMediaType = GameType & {
  platformIds: string[];
  gameplayStyleIds: string;
};
