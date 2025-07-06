import { Repository } from 'typeorm';
import { Inject } from '@nestjs/common';
import { CredentialMapper } from './credential.mapper';
import { CredentialEntity } from './credential.entity';
import { credentialRepository } from './credential.provider';
import { Credential } from '@identity/domain/entities/credential.value-object';
import { CredentialRepositoryPort } from '@identity/domain/services/credential-repository.port';

export class CredentialRepositoryAdapter implements CredentialRepositoryPort {
  constructor(
    @Inject(credentialRepository)
    private readonly credentialRepository: Repository<CredentialEntity>,
  ) {}
  async findByEmail(email: string): Promise<Credential | null> {
    return await this.credentialRepository
      .findOne({ where: { email } })
      .then((entity) => {
        if (!entity) return null;
        return CredentialMapper.toDomain(entity);
      });
  }
  async save(credential: Credential): Promise<Credential | null> {
    const credentialEntity = CredentialMapper.toPersistence(credential);
    return await this.credentialRepository
      .save(credentialEntity)
      .then((savedEntity) => CredentialMapper.toDomain(savedEntity));
  }
}
