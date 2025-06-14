import { Role } from './role.enum';
export interface SecurityServicePort {
  generateToken(payload: string): Promise<any>;
  validateToken(token: string): Promise<boolean>;
  decodeToken<T>(token: string): T;
  getUserRoleFromToken(token: string): Role;
}

export const SecurityServicePort = Symbol('SecurityServicePort');
