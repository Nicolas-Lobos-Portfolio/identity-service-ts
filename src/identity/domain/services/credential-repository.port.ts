import { Credential } from '../entities/credential.value-object';

export interface CredentialRepositoryPort {
  save(credential: Credential): Promise<Credential | null>;
  findByEmail(email: string): Promise<Credential | null>;
}

export const CredentialRepositoryPort = Symbol('CredentialRepositoryPort');
