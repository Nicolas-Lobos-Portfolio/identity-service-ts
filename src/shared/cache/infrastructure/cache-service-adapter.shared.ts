import { Inject, Injectable } from '@nestjs/common';
import { CacheServicePort } from '../domain/cache-service-port.shared';
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';

@Injectable()
export class CacheServiceAdapter implements CacheServicePort {
  constructor(
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ) {}
  async get(key: string): Promise<string | null> {
    const cacheResponse: string = await this.cacheManager.get(key);
    console.log('el response es', cacheResponse);
    return cacheResponse || null;
  }
  async set(key: string, value: string): Promise<void> {
    await this.cacheManager.set(key, value);
  }
  async del(key: string): Promise<void> {
    await this.cacheManager.del(key);
  }
  async clear(): Promise<boolean> {
    return await this.cacheManager.clear();
  }
}
