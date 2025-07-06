import { DataSource } from 'typeorm';
import { F1_REPOSITORY } from '../database.config';
import { ChampionshipEntity } from './championship.entity';

export const championshipRepository = 'championshipRepository';

export const ChampionshipServiceProviders = [
  {
    provide: championshipRepository,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ChampionshipEntity),
    inject: [F1_REPOSITORY],
  },
];
