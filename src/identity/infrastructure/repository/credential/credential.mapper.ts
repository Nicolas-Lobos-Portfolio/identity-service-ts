import { CredentialEntity } from './credential.entity';
import { Credential } from '@identity/domain/entities/credential.value-object';

export class CredentialMapper {
  static toDomain(entity: CredentialEntity): Credential {
    return new Credential(entity.email, entity.password);
  }

  static toPersistence(credential: Credential): CredentialEntity {
    const entity = new CredentialEntity();
    entity.email = credential.email;
    entity.password = credential.hashedPassword;

    return entity;
  }
}
