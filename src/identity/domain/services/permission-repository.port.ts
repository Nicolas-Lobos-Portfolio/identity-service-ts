import { Permission } from '../entities/permission.domain';

export interface PermissionRepositoryPort {
  save(permission: Permission);
}

export const PermissionRepositoryPort = Symbol('PermissionRepositoryPort');
