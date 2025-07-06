import { Permission } from './permission.domain';
import { getUUID } from '@shared/utils/get-uuid.utils';

export class Role {
  readonly id: string;
  readonly name: string;
  permissions: Permission[] = [];

  constructor(name: string, permissions?: Permission[], id?: string) {
    this.id = id ?? getUUID();
    this.name = name;
    if (permissions) this.permissions = permissions;
  }

  addPermission(permission: Permission) {
    if (!this.permissions.find((p) => p.equals(permission))) {
      this.permissions.push(permission);
    }
  }
}
