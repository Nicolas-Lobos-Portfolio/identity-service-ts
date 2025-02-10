import { Module } from '@nestjs/common';
import { CreateUserUseCase } from './application/create/create-user.usecase';
import { UserController } from './infrastructure/controllers/create-user/create.controller';
import { UserRepository } from './domain/user-repository';
import { InMemorUserRepository } from './infrastructure/repositories/in-memory.user-repository';

@Module({
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    InMemorUserRepository,
    {
      provide: UserRepository,
      useExisting: InMemorUserRepository,
    },
  ],
  exports: [CreateUserUseCase],
})
export class UserModule {}
