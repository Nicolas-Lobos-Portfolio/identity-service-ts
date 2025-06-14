import { BaseDomain } from '../../shared/domain/base.domain';
import { STATUS } from '../../shared/enum/status.enum';
import { User } from '../../user/domain/user';
import { v4 as uuidv4 } from 'uuid';

export class AccountPrimitive extends BaseDomain {
  username: string;
  password: string;
  type: string;
  user: User;
}

type AccountDomain = AccountPrimitive & BaseDomain;

export class Account {
  constructor(private readonly account: AccountDomain) {}

  static create(createAccount: AccountDomain, user: User) {
    return new Account({
      id: uuidv4(),
      user,
      password: createAccount.password,
      type: createAccount.type,
      username: createAccount.username,
      status: STATUS.PENDING,
      createAt: new Date(Date.now()),
      updateAt: new Date(Date.now()),
    });
  }

  toValue(): AccountDomain {
    return {
      id: this.account.id,
      username: this.account.username,
      type: this.account.type,
      password: this.account.password,
      user: this.account.user,
      createAt: this.account.createAt,
      updateAt: this.account.updateAt,
      status: this.account.status,
    };
  }
}
