import { DataSource } from 'typeorm';

import { ChampionshipEntity } from './championship.entity';
import { MySqlServerDataSourceProvide } from '../../../../shared/database/database.providers';

export const championshipRepository = 'championshipRepository';

export const ChampionshipServiceProviders = [
  {
    provide: championshipRepository,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ChampionshipEntity),
    inject: [MySqlServerDataSourceProvide],
  },
];
