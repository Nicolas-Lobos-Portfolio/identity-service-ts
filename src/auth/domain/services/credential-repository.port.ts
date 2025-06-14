import { LoginHttpDto } from 'src/user/infrastructure/controllers/login/login.http.dto';
import { Credential } from '../credential';

export interface CredentialRepositoryPort {
  findById(id: string): Promise<Credential | null>;
  saveCredential(credential: Credential): Promise<boolean>;
  deleteCredential(id: string): Promise<boolean>;
  validateCredential(password: LoginHttpDto): Promise<boolean>;
}

export const CredentialRepositoryPort = Symbol('CredentialRepositoryPort');
