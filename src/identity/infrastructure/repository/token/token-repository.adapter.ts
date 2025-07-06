import { Repository } from 'typeorm';
import { Inject } from '@nestjs/common';
import { TokenMapper } from './token.mapper';
import { TokenEntity } from './token.entity';
import { Token } from '@identity/domain/entities/token.domain';
import { tokenRepository } from '../token/token.provider';
import { TokenRepositoryPort } from '@identity/domain/services/token-repository.port';

export class TokenRepositoryAdapter implements TokenRepositoryPort {
  constructor(
    @Inject(tokenRepository)
    private readonly tokenRepository: Repository<TokenEntity>,
  ) {}
  save(token: Token) {
    const tokenEntity = TokenMapper.toPersistence(token);
    return this.tokenRepository.save(tokenEntity);
  }
}
