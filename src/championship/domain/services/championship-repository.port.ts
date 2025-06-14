import { ChampionshipEntity } from '../../../championship/infrastructure/database/championship/championship.entity';

export interface ChampionshipRepositoryPort {
  save(championshipEntity: ChampionshipEntity);
}

export const ChampionshipRepositoryPort = Symbol('ChampionshipRepositoryPort');
