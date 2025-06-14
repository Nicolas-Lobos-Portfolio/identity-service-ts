import { Module } from '@nestjs/common';
import { AuthGrpcController } from './infrastructure/grpc/auth.grpc';
import { CreateCredentialUseCase } from './application/create-credential';
import { CredentialRepositoryAdapter } from './infrastructure/database/credential.repository';
import { CredentialRepositoryPort } from './domain/services/credential-repository.port';
import { CheckCodeUseCase } from './application/check-code';
import { SendMailCodeUseCase } from './application/send-code-mail';
import { EmailModule } from './../shared/email/email.module';
import { CacheModule } from './../shared/cache/cache.module';
import { DatabaseModule } from '../shared/database/database.module';
import { AuthRepositoryProviders } from './infrastructure/database/providers/credential.providers';
import { HttpRequestModule } from '../shared/http-request/http.module';
import { httpConfigProvider } from './infrastructure/http/http.providers';
import { PersonalHttpServiceAdapter } from './infrastructure/http/personal-http-service.adapter';
import { PersonalHttpServicePort } from './domain/services/personal-http-service.port';
import { AdminAndFinanceHttpServicePort } from './domain/services/admin-and-finance/admin-and-finance-service.port';
import { AdminAndFinanceHttpServiceAdapter } from './infrastructure/http/admin-and-finance-http-service.adapter';
import { AuthController } from './infrastructure/controller/auth.controller';
import { SecurityModule } from '../shared/security/security.module';
import { LoginUseCase } from './application/login/login.usecase';
import { LoggerModule } from '../shared/logger/logger.module';

const { personal, adminAndFinance } = httpConfigProvider.client;

@Module({
  imports: [
    EmailModule,
    CacheModule,
    DatabaseModule,
    HttpRequestModule.register(
      personal.provider,
      personal.url,
      'personal.timeout',
      personal.header,
    ),
    HttpRequestModule.register(
      adminAndFinance.provider,
      adminAndFinance.url,
      'adminAndFinance.timeout',
      adminAndFinance.header,
    ),

    SecurityModule,
    LoggerModule,
  ],

  providers: [
    ...AuthRepositoryProviders,

    CreateCredentialUseCase,
    SendMailCodeUseCase,
    CheckCodeUseCase,
    LoginUseCase,

    CredentialRepositoryAdapter,
    AdminAndFinanceHttpServiceAdapter,
    PersonalHttpServiceAdapter,
    {
      provide: CredentialRepositoryPort,
      useExisting: CredentialRepositoryAdapter,
    },
    {
      provide: AdminAndFinanceHttpServicePort,
      useExisting: AdminAndFinanceHttpServiceAdapter,
    },
    {
      provide: PersonalHttpServicePort,
      useExisting: PersonalHttpServiceAdapter,
    },
  ],
  exports: [CreateCredentialUseCase],
  controllers: [AuthGrpcController, AuthController],
})
export class AuthModule {}
