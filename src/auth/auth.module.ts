import { Module } from "@nestjs/common";
import { AuthService } from "./infrastructure/grpc/auth.grpc";
import { CreateCredentialUseCase } from "./application/create-credential";
import { CredentialRepository } from "./infrastructure/repository/credential.repository";
import { CREDENTIAL_REPOSITORY_PORT } from "./domain/credential-repository.port";

@Module({
  controllers:[AuthService],
  providers: [
    CreateCredentialUseCase,
    AuthService,

    {
      provide: CREDENTIAL_REPOSITORY_PORT,
      useClass: CredentialRepository,
    }
  ],
  exports: [CreateCredentialUseCase],
  imports: [],
})
export class AuthModule {}



// @Module({
//   controllers: [UserController],
//   providers: [
//     CreateUserUseCase,
//     InMemorUserRepository,
//     {
//       provide: UserRepository,
//       useExisting: InMemorUserRepository,
//     },
//   ],
//   exports: [CreateUserUseCase],
// })
// export class UserModule {}
