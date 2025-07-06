import { UserEntity } from '../user/user.entity';
import { PermissionEntity } from '../permissions/permission.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { BaseIdEntity } from '@shared/infrastructure/entities/base-id.entity';

@Entity('roles')
export class RoleEntity extends BaseIdEntity {
  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  description: string;

  @ManyToMany(() => UserEntity, (user) => user.roles)
  users: UserEntity[];

  @ManyToMany(() => PermissionEntity, (permission) => permission.roles)
  permissions: PermissionEntity[];
}
