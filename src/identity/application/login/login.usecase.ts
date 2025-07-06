import { LoginDto } from './login.dto';
import { Payload } from './payload.type';
import { Inject, Injectable } from '@nestjs/common';
import { EncryptServicePort } from '@shared/security/domain/encrypt-service.port';
import { SecurityServicePort } from '@shared/security/domain/security-service.port';
import { CredentialRepositoryPort } from '@identity/domain/services/credential-repository.port';

@Injectable()
export class LoginUseCase {
  constructor(
    @Inject(EncryptServicePort)
    private readonly encryptServicePort: EncryptServicePort,
    @Inject(SecurityServicePort)
    private readonly securityServicePort: SecurityServicePort,
    @Inject(CredentialRepositoryPort)
    private readonly credentialRepositoryPort: CredentialRepositoryPort,
  ) {}

  async execute(loginDto: LoginDto): Promise<string> {
    const { email, password } = loginDto;
    if (!email) {
      throw new Error('Email not found in credential');
    }
    const credential = await this.credentialRepositoryPort.findByEmail(email);
    if (!credential) {
      throw new Error('Invalid credentials');
    }
    const isPasswordValid = await this.encryptServicePort.compare(
      password,
      credential.hashedPassword,
    );
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }
    if (email !== credential.email) {
      throw new Error('Email does not match');
    }
    const role = 'user';
    const payload: Payload = {
      email: credential.email,
      role: role,
    };
    return await this.securityServicePort.generateToken<Payload>(payload);
  }
}
