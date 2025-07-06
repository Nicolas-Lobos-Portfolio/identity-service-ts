import { PrimitiveUser, User } from '@user/domain/user';
import { UserRepository } from '@user/domain/user-repository';
import { Injectable } from '@shared/dependency-injection/injectable';

@Injectable()
export class InMemoryUserRepository extends UserRepository {
  getByUserName(username: string): Promise<User | null> {
    throw new Error(`Method not implemented. ${username}`);
  }
  private users: PrimitiveUser[] = [];

  async create(user: User): Promise<void> {
    this.users.push(user.toValue());
  }

  async getById(id: string): Promise<User | null> {
    const user = this.users.find((user) => user.id === id);
    return user ? new User(user) : null;
  }
}
