import { DataSource } from 'typeorm';
import { PilotEntity } from './pilot.entity';
import { F1_REPOSITORY } from '../database.config';

export const pilotRepository = 'pilotRepository';

export const PilotServiceProviders = [
  {
    provide: pilotRepository,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(PilotEntity),
    inject: [F1_REPOSITORY],
  },
];
