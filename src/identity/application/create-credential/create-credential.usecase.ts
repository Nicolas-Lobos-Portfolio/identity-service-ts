import { Inject } from '@nestjs/common';
import { User } from '@identity/domain/entities/user.domain';
import { CreateCredentialDto } from './dto/create-credential.dto';
import { Injectable } from '@shared/dependency-injection/injectable';
import { Credential } from '@identity/domain/entities/credential.value-object';
import { UserRepositoryPort } from '@identity/domain/services/user-repository.port';
import { EncryptServicePort } from '@shared/security/domain/encrypt-service.port';

@Injectable()
export class CreateCredentialUseCase {
  constructor(
    @Inject(UserRepositoryPort)
    private readonly userRepositoryPort: UserRepositoryPort,
    @Inject(EncryptServicePort)
    private readonly encryptServicePort: EncryptServicePort,
  ) {}

  async execute(credentialDto: CreateCredentialDto) {
    try {
      const passwordHashed = await this.encryptServicePort.hash(
        credentialDto.password,
      );
      const credential = new Credential(credentialDto.email, passwordHashed);

      const user = new User({
        username: credentialDto.username,
        credential: credential,
      });

      return await this.userRepositoryPort.save(user);
    } catch (error) {
      throw new Error(
        `Error creating credential ${JSON.stringify(error.message)}`,
      );
    }
  }
}
