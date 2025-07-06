import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ChatModule } from '@chat/chat.module';
import app from '@shared/infrastructure/config/app';
import email from '@shared/infrastructure/config/email';
import { IdentityModule } from '@identity/identity.module';
import { LoggerModule } from '@shared/logger/logger.module';
import database from '@shared/infrastructure/config/database';
import { DatabaseModule } from '@shared/database/database.module';
import { ChampionshipModule } from '@championship/championship.module';
import { InterceptorModule } from '@shared/interceptor/interceptor.module';
import { authConfiguration } from '@auth/infrastructure/config/auth.config';
import { f1ClientHttp } from '@championship/infrastructure/config/pilot.config';

const configuration = [
  app,
  database,
  email,
  ...authConfiguration,
  ...f1ClientHttp,
];

@Module({
  imports: [
    InterceptorModule,
    DatabaseModule,
    LoggerModule,
    ChampionshipModule,
    IdentityModule,
    ChatModule,

    // enviroment vars
    ConfigModule.forRoot({
      ignoreEnvFile: false,
      isGlobal: true,
      load: configuration,
    }),
  ],
})
export class AppModule {}
