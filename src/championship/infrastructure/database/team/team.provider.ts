import { DataSource } from 'typeorm';
import { TeamEntity } from './team.entity';
import { F1_REPOSITORY } from '../database.config';

export const teamRepository = 'teamRepository';

export const TeamServiceProviders = [
  {
    provide: teamRepository,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(TeamEntity),
    inject: [F1_REPOSITORY],
  },
];
