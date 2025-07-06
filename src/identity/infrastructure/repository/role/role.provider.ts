import { DataSource } from 'typeorm';
import { RoleEntity } from './role.entity';
import { IDENTITY_REPOSITORY } from '../config.repository';

export const roleRepository = 'roleRepository';

export const RoleServiceProviders = [
  {
    provide: roleRepository,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(RoleEntity),
    inject: [IDENTITY_REPOSITORY],
  },
];
