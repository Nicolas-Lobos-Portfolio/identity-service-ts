import { Repository } from 'typeorm';
import { Inject } from '@nestjs/common';
import { RoleMapper } from './role.mapper';
import { RoleEntity } from './role.entity';
import { Role } from '@identity/domain/entities/role.domain';
import { roleRepository } from '../role/role.provider';
import { RoleRepositoryPort } from '@identity/domain/services/role-repository.port';

export class RoleRepositoryAdapter implements RoleRepositoryPort {
  constructor(
    @Inject(roleRepository)
    private readonly roleRepository: Repository<RoleEntity>,
  ) {}
  save(role: Role) {
    const roleEntity = RoleMapper.toPersistence(role);
    return this.roleRepository.save(roleEntity);
  }
}
