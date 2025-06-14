import { DataSource } from 'typeorm';

import { TeamEntity } from './team.entity';
import { MySqlServerDataSourceProvide } from '../../../../shared/database/database.providers';

export const teamRepository = 'teamRepository';

export const TeamServiceProviders = [
  {
    provide: teamRepository,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(TeamEntity),
    inject: [MySqlServerDataSourceProvide],
  },
];
