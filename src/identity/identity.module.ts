import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CacheModule } from '@shared/cache/cache.module';
import { EmailModule } from '@shared/email/email.module';
import { LoggerModule } from '@shared/logger/logger.module';
import { LoginUseCase } from './application/login/login.usecase';
import { DatabaseModule } from '@shared/database/database.module';
import { SecurityModule } from '@shared/security/security.module';
import { UserRepositoryPort } from './domain/services/user-repository.port';
import { RoleRepositoryPort } from './domain/services/role-repository.port';
import { AuthController } from './infrastructure/controller/auth.controller';
import { TokenRepositoryPort } from './domain/services/token-repository.port';
import { CheckCodeUseCase } from './application/check-code/check-code.usecase';
import { IDENTITY_REPOSITORY } from './infrastructure/repository/config.repository';
import { UserServiceProviders } from './infrastructure/repository/user/user.provider';
import { RoleServiceProviders } from './infrastructure/repository/role/role.provider';
import { CredentialRepositoryPort } from './domain/services/credential-repository.port';
import { PermissionRepositoryPort } from './domain/services/permission-repository.port';
import { TokenServiceProviders } from './infrastructure/repository/token/token.provider';
import { SendMailCodeUseCase } from './application/send-code-mail/send-code-mail.usecase';
import { RoleRepositoryAdapter } from './infrastructure/repository/role/role-repository.adapter';
import { UserRepositoryAdapter } from './infrastructure/repository/user/user-repository.adapter';
import { TokenRepositoryAdapter } from './infrastructure/repository/token/token-repository.adapter';
import { CreateCredentialUseCase } from './application/create-credential/create-credential.usecase';
import { CredentialServiceProviders } from './infrastructure/repository/credential/credential.provider';
import { PermissionServiceProviders } from './infrastructure/repository/permissions/permission.provider';
import { CredentialRepositoryAdapter } from './infrastructure/repository/credential/credential-repository.adapter';
import { PermissionRepositoryAdapter } from './infrastructure/repository/permissions/permission-repository.adapter';

@Module({
  imports: [
    SecurityModule,
    CacheModule,
    LoggerModule,
    EmailModule,
    DatabaseModule.forRootAsync({
      name: IDENTITY_REPOSITORY,
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        ...configService.get('database.identity'),
        synchronize: true,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
      }),
      inject: [ConfigService],
    }),
  ],

  providers: [
    CheckCodeUseCase,
    CreateCredentialUseCase,
    SendMailCodeUseCase,
    LoginUseCase,
    CredentialRepositoryAdapter,
    PermissionRepositoryAdapter,
    RoleRepositoryAdapter,
    TokenRepositoryAdapter,
    UserRepositoryAdapter,
    {
      provide: CredentialRepositoryPort,
      useExisting: CredentialRepositoryAdapter,
    },
    {
      provide: PermissionRepositoryPort,
      useExisting: PermissionRepositoryAdapter,
    },
    {
      provide: RoleRepositoryPort,
      useExisting: RoleRepositoryAdapter,
    },
    {
      provide: TokenRepositoryPort,
      useExisting: TokenRepositoryAdapter,
    },
    {
      provide: UserRepositoryPort,
      useExisting: UserRepositoryAdapter,
    },
    ...UserServiceProviders,
    ...RoleServiceProviders,
    ...TokenServiceProviders,
    ...CredentialServiceProviders,
    ...PermissionServiceProviders,
  ],
  controllers: [AuthController],
})
export class IdentityModule {}
