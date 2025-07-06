import { Inject, UnauthorizedException } from '@nestjs/common';
import { Injectable } from '../../../shared/dependency-injection/injectable';
import { SecurityServicePort } from '../../../shared/security/domain/security-service.port';
import { CredentialRepositoryPort } from '../../../auth/domain/services/credential-repository.port';

@Injectable()
export class LoginUseCase {
  constructor(
    @Inject(CredentialRepositoryPort)
    private readonly credentialRepositoryPort: CredentialRepositoryPort,

    @Inject(SecurityServicePort)
    private readonly securityServicePort: SecurityServicePort,
  ) {}

  async execute(loginDto) {
    console.log('EL LOGIN ES', { loginDto });
    const user =
      await this.credentialRepositoryPort.validateCredential(loginDto);
    if (!user)
      throw new UnauthorizedException(
        `Invalid credentials, ${'response'} ,${user}`,
      );
    return await this.securityServicePort.generateToken(loginDto.username);
  }
}
