import { DataSource } from 'typeorm';
import { PermissionEntity } from './permission.entity';
import { IDENTITY_REPOSITORY } from '../config.repository';

export const permissionRepository = 'permissionRepository';

export const PermissionServiceProviders = [
  {
    provide: permissionRepository,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(PermissionEntity),
    inject: [IDENTITY_REPOSITORY],
  },
];
