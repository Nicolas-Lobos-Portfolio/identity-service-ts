import { Token } from '../entities/token.domain';

export interface TokenRepositoryPort {
  save(token: Token);
}

export const TokenRepositoryPort = Symbol('TokenRepositoryPort');
