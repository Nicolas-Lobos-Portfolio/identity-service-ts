import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { EncryptServicePort } from '../domain/encrypt-service.port';

@Injectable()
export class EncryptServiceAdapter implements EncryptServicePort {
  private readonly saltRounds = 12;

  async hash(password: string): Promise<string> {
    return await bcrypt.hash(password, this.saltRounds);
  }

  async compare(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }
}
