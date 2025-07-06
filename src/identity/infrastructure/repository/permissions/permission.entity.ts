import { RoleEntity } from '../role/role.entity';
import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { BaseIdEntity } from '@shared/infrastructure/entities/base-id.entity';

@Entity('permissions')
export class PermissionEntity extends BaseIdEntity {
  @Column()
  action: string;

  @Column()
  resource: string;

  @Column({ nullable: true })
  description: string;

  @ManyToMany(() => RoleEntity, (role) => role.permissions, {
    eager: true,
  })
  @JoinTable({
    name: 'roles_permissions',
    joinColumn: { name: 'permission_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'role_id', referencedColumnName: 'id' },
  })
  roles: RoleEntity[];
}
