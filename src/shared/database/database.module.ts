import { Module } from '@nestjs/common';
import { sqlServerDatabaseProviders } from './database.providers';

@Module({
  providers: [...sqlServerDatabaseProviders],
  exports: [...sqlServerDatabaseProviders],
})
export class DatabaseModule {}
