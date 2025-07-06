import { Module } from '@nestjs/common';
import { UserRepository } from '@user/domain/user-repository';
import { CreateUserUseCase } from '@user/application/create/create-user.usecase';
import { UserController } from '@user/infrastructure/controllers/create-user/create.controller';
import { InMemoryUserRepository } from '@user/infrastructure/repositories/in-memory.user-repository';

@Module({
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    InMemoryUserRepository,
    {
      provide: UserRepository,
      useExisting: InMemoryUserRepository,
    },
  ],
  exports: [CreateUserUseCase],
})
export class UserModule {}
