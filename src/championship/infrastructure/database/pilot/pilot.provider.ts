import { DataSource } from 'typeorm';

import { PilotEntity } from './pilot.entity';
import { MySqlServerDataSourceProvide } from '../../../../shared/database/database.providers';

export const pilotRepository = 'pilotRepository';

export const PilotServiceProviders = [
  {
    provide: pilotRepository,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(PilotEntity),
    inject: [MySqlServerDataSourceProvide],
  },
];
