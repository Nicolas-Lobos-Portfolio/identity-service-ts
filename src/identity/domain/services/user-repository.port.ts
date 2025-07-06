import { User } from '../entities/user.domain';

export interface UserRepositoryPort {
  save(user: User);
}

export const UserRepositoryPort = Symbol('UserRepositoryPort');
