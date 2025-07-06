import { Permission } from '@identity/domain/entities/permission.domain';
import { PermissionEntity } from './permission.entity';

export class PermissionMapper {
  static toDomain(entity: PermissionEntity): Permission {
    const permission = new Permission(entity.action, entity.resource);
    // opcionalmente inyectamos el id real si no usamos UUID generado en constructor
    (permission as any).id = entity.id;
    return permission;
  }

  static toPersistence(domain: Permission): PermissionEntity {
    const entity = new PermissionEntity();
    entity.id = domain.id;
    entity.action = domain.action;
    entity.resource = domain.resource;
    return entity;
  }
}
