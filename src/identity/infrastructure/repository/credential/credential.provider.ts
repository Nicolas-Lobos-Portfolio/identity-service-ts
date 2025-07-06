import { DataSource } from 'typeorm';
import { CredentialEntity } from './credential.entity';
import { IDENTITY_REPOSITORY } from '../config.repository';

export const credentialRepository = 'credentialRepository';

export const CredentialServiceProviders = [
  {
    provide: credentialRepository,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CredentialEntity),
    inject: [IDENTITY_REPOSITORY],
  },
];
