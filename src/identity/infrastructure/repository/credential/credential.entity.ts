import { UserEntity } from '../user/user.entity';
import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { BaseIdEntity } from '@shared/infrastructure/entities/base-id.entity';

@Entity('credentials')
export class CredentialEntity extends BaseIdEntity {
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToOne(() => UserEntity, (user) => user.credential, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
