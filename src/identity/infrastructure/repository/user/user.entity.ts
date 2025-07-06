import {
  Entity,
  Column,
  CreateDateColumn,
  OneToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { RoleEntity } from '../role/role.entity';
import { TokenEntity } from '../token/token.entity';
import { CredentialEntity } from '../credential/credential.entity';
import { BaseIdEntity } from '@shared/infrastructure/entities/base-id.entity';

@Entity('user')
export class UserEntity extends BaseIdEntity {
  @Column({ unique: true })
  username: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToOne(() => CredentialEntity, (credential) => credential.user, {
    cascade: true,
  })
  credential: CredentialEntity;

  @OneToMany(() => TokenEntity, (token) => token.user, {
    cascade: true,
  })
  tokens: TokenEntity[];

  @ManyToMany(() => RoleEntity, (role) => role.users, { eager: true })
  @JoinTable({
    name: 'user_roles',
    joinColumn: { name: 'user_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'role_id', referencedColumnName: 'id' },
  })
  roles: RoleEntity[];
}
