import { RoleEntity } from './role.entity';
import { Role } from '@identity/domain/entities/role.domain';
import { PermissionMapper } from '../permissions/permission.mapper';

export class RoleMapper {
  static toDomain(entity: RoleEntity): Role {
    const permissions = entity.permissions.map(PermissionMapper.toDomain);
    return new Role(entity.name, permissions, entity.id);
  }

  static toDomainList(roleList: Array<RoleEntity>): Array<Role> {
    return roleList.map(this.toDomain);
  }

  static toPersistenceList(roleEntityList: Array<Role>): Array<RoleEntity> {
    return roleEntityList.map(this.toPersistence);
  }
  static toPersistence(role: Role): RoleEntity {
    const entity = new RoleEntity();
    entity.id = role.id;
    entity.name = role.name;
    entity.permissions = role.permissions.map(PermissionMapper.toPersistence);
    return entity;
  }
}
