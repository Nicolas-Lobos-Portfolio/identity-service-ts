import { STATUS } from '../../shared/enums/status.enum';
import { Password } from './password';

export class Credential {
  id: string;
  userId: string;
  username: string;
  password: Password;
  authProvider: string;
  externalId?: string;
  createdAt: Date;
  updateAt: Date;
  status: STATUS;
}
