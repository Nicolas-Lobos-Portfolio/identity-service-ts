export interface CacheServicePort {
  get(key: string): Promise<string | null>;
  set(key: string, value: string): Promise<void>;
  del(key: string): Promise<void>;
  clear(): Promise<boolean>;
}
export const CacheServicePort = Symbol('CacheServicePort');
