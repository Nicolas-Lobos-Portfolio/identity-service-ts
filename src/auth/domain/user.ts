import { BaseIdDto } from 'src/shared/dto/base-id.dto';

export class User extends BaseIdDto {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  password: string;
}
