import { CacheServicePort } from '../../cache-service-port.shared';

export const mockCacheServicePort: CacheServicePort = {
  get: jest.fn((key: string) => {
    if (key === 'existing-key') return Promise.resolve({ data: 'mockedData' });
    return Promise.resolve(null);
  }),
  set: jest.fn((key: string, value: any, ttl?: number) => Promise.resolve()),
  del: jest.fn((key: string) => Promise.resolve()),
  clear: jest.fn(() => Promise.resolve(true)),
};
