export class TeamDto {
  id: number;
  name: string;
  logo: string;
}

export class RankingDto {
  position: number;
  team: TeamDto;
  points: number;
  season: number;
}

export class RankingsResponseDto {
  get: string;
  parameters: {
    season: string;
  };
  errors: any[]; // Puedes especificar el tipo si conoces la estructura de los errores
  results: number;
  response: RankingDto[];
}
