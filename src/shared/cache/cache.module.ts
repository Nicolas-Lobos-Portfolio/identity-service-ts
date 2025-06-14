import { Module } from '@nestjs/common';
import { CacheServicePort } from './domain/cache-service-port.shared';
import { CacheServiceAdapter } from './infrastructure/cache-service-adapter.shared';
import { CacheModule as CacheManager } from '@nestjs/cache-manager';
import { mockCacheServicePort } from './domain/test/mock/mock-cache-service-port.spec';

@Module({
  providers: [
    CacheServiceAdapter,
    {
      provide: CacheServicePort,
      useExisting: CacheServiceAdapter,
    },
  ],
  imports: [
    CacheManager.register({
      store: process.env.REDIS_STORE,
      host: process.env.REDIS_HOST,
      port: +process.env.REDIS_PORT,
      isGlobal: true,
    }),
  ],
  exports: [CacheServicePort, CacheServiceAdapter],
})
export class CacheModule {}
