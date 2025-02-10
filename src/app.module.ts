import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import app from './shared/infrastructure/config/app';
import database from './shared/infrastructure/config/database';
import { AuthModule } from './auth/auth.module';

const configuration = [app, database]

@Module({
  imports: [
    UserModule,
    AuthModule,
    ConfigModule.forRoot({
      envFilePath: '.development.env',
      ignoreEnvFile: true,
      isGlobal: true,
      load: configuration
    })

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
