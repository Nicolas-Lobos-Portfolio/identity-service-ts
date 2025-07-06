import { Role } from '../entities/role.domain';

export interface RoleRepositoryPort {
  save(role: Role);
}

export const RoleRepositoryPort = Symbol('RoleRepositoryPort');
