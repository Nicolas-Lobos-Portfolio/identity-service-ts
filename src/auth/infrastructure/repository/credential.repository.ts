import { Credential } from '../../domain/credential';
import { CredentialRepositoryPort } from '../../domain/credential-repository.port';

export class CredentialRepository implements CredentialRepositoryPort {
  private readonly credentials: Array<Credential>;
  constructor() {}

  findById(id: string): Promise<Credential | null> {
    throw new Error(`Method not implemented. ${id}`);
  }
  saveCredential(credential: Credential): Promise<void> {
    this.credentials.push(credential);
    throw new Error(`Method not implemented.`);
  }
  deleteCredential(id: string): Promise<boolean> {
    throw new Error(`Method not implemented. ${id}`);
  }
}
