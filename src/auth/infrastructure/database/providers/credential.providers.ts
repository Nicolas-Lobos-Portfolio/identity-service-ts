import { DataSource } from 'typeorm';
import { CredentialEntity } from '../entities/credential.entity';
import { MySqlServerDataSourceProvide } from '../../../../shared/database/database.providers';

export const credentialRepository = 'credentialRepository';

export const AuthRepositoryProviders = [
  {
    provide: credentialRepository,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CredentialEntity),
    inject: [MySqlServerDataSourceProvide],
  },
];
