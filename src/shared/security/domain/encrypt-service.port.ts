export interface EncryptServicePort {
  hash(value: string): Promise<string>;
  compare(value: string, hash: string): Promise<boolean>;
}
export const EncryptServicePort = Symbol('EncryptServicePort');
