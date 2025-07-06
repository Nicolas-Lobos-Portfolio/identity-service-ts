import { DataSource } from 'typeorm';
import { UserEntity } from './user.entity';
import { IDENTITY_REPOSITORY } from '../config.repository';

export const userRepository = 'userRepository';

export const UserServiceProviders = [
  {
    provide: userRepository,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(UserEntity),
    inject: [IDENTITY_REPOSITORY],
  },
];
