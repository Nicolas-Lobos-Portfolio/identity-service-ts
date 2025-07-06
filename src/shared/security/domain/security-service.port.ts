import { Role } from './role.enum';
export interface SecurityServicePort {
  generateToken<T>(payload: T): Promise<string>;
  validateToken(token: string): Promise<boolean>;
  decodeToken<T>(token: string): T;
  getUserRoleFromToken(token: string): Role;
}

export const SecurityServicePort = Symbol('SecurityServicePort');
