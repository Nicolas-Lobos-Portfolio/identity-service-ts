import { BaseDomain } from 'src/shared/domain/base.domain';
import { Password } from './password';
import { User } from './user';

export class Credential extends BaseDomain {
  user: User;
  username: string;
  password: Password;
  authProvider: string;
  externalId?: string;
}
