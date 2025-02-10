import { Injectable } from '../../../shared/dependency-injection/injectable';
import { PrimitiveUser, User } from '../../domain/user';
import { UserRepository } from '../../domain/user-repository';

@Injectable()
export class InMemorUserRepository extends UserRepository {
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
