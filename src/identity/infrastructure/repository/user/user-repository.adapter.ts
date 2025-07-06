import { Repository } from 'typeorm';
import { Inject } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { UserMapper } from './user.mapper';
import { userRepository } from './user.provider';
import { User } from '@identity/domain/entities/user.domain';
import { UserRepositoryPort } from '@identity/domain/services/user-repository.port';

export class UserRepositoryAdapter implements UserRepositoryPort {
  constructor(
    @Inject(userRepository)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  save(user: User) {
    const userEntity = UserMapper.toPersistence(user);
    return this.userRepository.save(userEntity);
  }
}
