import { Repository } from 'typeorm';
import { Inject } from '@nestjs/common';
import { PermissionMapper } from './permission.mapper';
import { PermissionEntity } from './permission.entity';
import { permissionRepository } from './permission.provider';
import { Permission } from '@identity/domain/entities/permission.domain';
import { PermissionRepositoryPort } from '@identity/domain/services/permission-repository.port';

export class PermissionRepositoryAdapter implements PermissionRepositoryPort {
  constructor(
    @Inject(permissionRepository)
    private readonly permissionRepository: Repository<PermissionEntity>,
  ) {}
  save(permission: Permission) {
    const permissionEntity = PermissionMapper.toPersistence(permission);
    return this.permissionRepository.save(permissionEntity);
  }
}
