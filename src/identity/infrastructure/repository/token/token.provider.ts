import { DataSource } from 'typeorm';

import { TokenEntity } from './token.entity';
import { IDENTITY_REPOSITORY } from '../config.repository';

export const tokenRepository = 'tokenRepository';

export const TokenServiceProviders = [
  {
    provide: tokenRepository,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(TokenEntity),
    inject: [IDENTITY_REPOSITORY],
  },
];
