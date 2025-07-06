import { UserEntity } from './user.entity';
import { RoleMapper } from '../role/role.mapper';
import { User } from '@identity/domain/entities/user.domain';
import { TokenMapper } from '../token/token.mapper';
import { Credential } from '@identity/domain/entities/credential.value-object';
import { CredentialEntity } from '@identity/infrastructure/repository/credential/credential.entity';

export class UserMapper {
  static toDomain(entity: UserEntity): User {
    const credential = new Credential(
      entity.credential.email,
      entity.credential.password,
    );
    const roles = RoleMapper.toDomainList(entity.roles);
    const tokens = entity.tokens.map(TokenMapper.toDomain);

    return new User({
      username: entity.username,
      credential,
      roles,
      tokens,
      id: entity.id,
    });
  }

  static toPersistence(user: User): UserEntity {
    const entity = new UserEntity();
    entity.id = user.id;
    entity.username = user.username;

    const credentialEntity = new CredentialEntity();
    credentialEntity.email = user.credential.email;
    credentialEntity.password = user.credential.hashedPassword;

    entity.credential = credentialEntity;

    entity.roles = RoleMapper.toPersistenceList(user.roles);
    entity.tokens = user.tokens.map(TokenMapper.toPersistence);

    return entity;
  }
}
