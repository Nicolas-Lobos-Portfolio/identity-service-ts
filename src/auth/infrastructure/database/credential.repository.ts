import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { Credential } from '@auth/domain/credential';
import { CredentialEntity } from './entities/credential.entity';
import { credentialRepository } from './providers/credential.providers';
import { LoginHttpDto } from '@user/infrastructure/controllers/login/login.http.dto';
import { CredentialRepositoryPort } from '@auth/domain/services/credential-repository.port';
@Injectable()
export class CredentialRepositoryAdapter implements CredentialRepositoryPort {
  private readonly credentials: Array<Credential>;
  constructor(
    @Inject(credentialRepository)
    private credentialRepository: Repository<CredentialEntity>,
  ) {}
  async validateCredential(credentialsDto: LoginHttpDto): Promise<boolean> {
    return true;
    // const credential = await  this.credentialRepository.findOneBy({ username: credentialsDto.username })

    // const isPasswordValid = await bcrypt.compare(credentialsDto.password, credential.password);

    // if (!isPasswordValid) return false;

    // return true

    // throw new Error('Method not implemented.');
  }

  findById(id: string): Promise<Credential | null> {
    this.credentialRepository.findBy({ id });
    throw new Error(`Method not implemented. ${id}`);
  }
  saveCredential(credential: Credential): Promise<boolean> {
    this.credentials.push(credential);
    throw new Error(`Method not implemented.`);
  }
  deleteCredential(id: string): Promise<boolean> {
    throw new Error(`Method not implemented. ${id}`);
  }
}
