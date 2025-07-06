import { getUUID } from '@shared/utils/get-uuid.utils';

export class Permission {
  readonly id: string;
  readonly action: string;
  readonly resource: string;

  constructor(action: string, resource: string, id?: string) {
    this.id = id ?? getUUID();
    this.action = action;
    this.resource = resource;
  }

  equals(other: Permission): boolean {
    return this.action === other.action && this.resource === other.resource;
  }
}

const userPermissions = [
  new Permission('create', 'post'),
  new Permission('read', 'post'),
  new Permission('update', 'post'),
  new Permission('delete', 'post'),
  new Permission('create', 'comment'),
  new Permission('delete', 'comment'),
  new Permission('follow', 'user'),
  new Permission('update', 'profile'),
  new Permission('read', 'feed'),
  new Permission('read', 'notifications'),
];

const moderatorPermissions = [
  ...userPermissions,
  new Permission('manage', 'report'),
  new Permission('delete', 'comment'), // también de otros
];

const adminPermissions = [
  ...moderatorPermissions,
  new Permission('ban', 'user'),
];
