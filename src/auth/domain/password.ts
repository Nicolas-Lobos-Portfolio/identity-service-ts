import { STATUS } from '../../shared/enums/status.enum';

export class Password {
  id: string;
  hashedContent: string;
  createdAt: Date;
  updateAt: Date;
  status: STATUS;
}
