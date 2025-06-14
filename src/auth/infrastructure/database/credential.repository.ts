import { Inject, Injectable } from '@nestjs/common';
import { Credential } from '../../domain/credential';
import { CredentialRepositoryPort } from '../../domain/services/credential-repository.port';
import { Repository } from 'typeorm';
import { CredentialEntity } from './entities/credential.entity';
import * as bcrypt from 'bcrypt';
import { LoginHttpDto } from 'src/user/infrastructure/controllers/login/login.http.dto';
import { credentialRepository } from './providers/credential.providers';
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
