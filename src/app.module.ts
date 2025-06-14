import app from './shared/infrastructure/config/app';
import database from './shared/infrastructure/config/database';
import email from './shared/infrastructure/config/email';
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { InterceptorModule } from './shared/interceptor/interceptor.module';
import { DatabaseModule } from './shared/database/database.module';
import { authContfiguration } from './auth/infrastructure/config/auth.config';
import { LoggerModule } from './shared/logger/logger.module';
import { ChampionshipModule } from './championship/championship.module';
import { f1ClientHttp } from './championship/infrastructure/config/pilot.config';

const configuration = [
  app,
  database,
  email,
  ...authContfiguration,
  ...f1ClientHttp,
];

@Module({
  imports: [
    UserModule,
    AuthModule,
    InterceptorModule,
    DatabaseModule,
    LoggerModule,
    ChampionshipModule,

    // enviroment vars
    ConfigModule.forRoot({
      ignoreEnvFile: false,
      isGlobal: true,
      load: configuration,
    }),
  ],
})
export class AppModule {}
