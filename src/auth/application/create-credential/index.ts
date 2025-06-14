import { Inject } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Credential } from '../../domain/credential';
import { CredentialRepositoryPort } from '../../../auth/domain/services/credential-repository.port';
import { Injectable } from '../../../shared/dependency-injection/injectable';

@Injectable()
export class CreateCredentialUseCase {
  constructor(
    @Inject(CredentialRepositoryPort)
    private readonly credentialRepository: CredentialRepositoryPort,
  ) {}

  async execute(data) {
    try {
      const credentialDto = plainToInstance(Credential, data);

      return `${await this.credentialRepository.saveCredential(credentialDto)}`;
    } catch (error) {
      throw new Error(
        `Error creating credential ${JSON.stringify(error.message)}`,
      );
    }
  }
}
