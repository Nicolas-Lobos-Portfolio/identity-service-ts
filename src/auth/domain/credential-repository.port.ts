import { Credential } from "./credential";

export interface CredentialRepositoryPort {
  findById(id: string): Promise<Credential | null>;
  saveCredential(credential: Credential): Promise<void>;
  deleteCredential(id: string): Promise<boolean>;
}

export const CREDENTIAL_REPOSITORY_PORT = Symbol('CredentialRepositoryPort');