import { Token } from '@identity/domain/entities/token.domain';
import { TokenEntity } from './token.entity';

export class TokenMapper {
  static toDomain(entity: TokenEntity): Token {
    return new Token(
      entity.id,
      entity.createdAt,
      entity.isActive,
      entity.token,
    );
  }

  static toPersistence(token: Token): TokenEntity {
    const entity = new TokenEntity();
    entity.id = token.id;
    entity.token = token.token;
    entity.createdAt = token.createdAt;
    entity.isActive = token.isActive;
    return entity;
  }
}
