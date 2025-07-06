import { UserEntity } from '../user/user.entity';
import { Entity, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { BaseIdEntity } from '@shared/infrastructure/entities/base-id.entity';

@Entity('tokens')
export class TokenEntity extends BaseIdEntity {
  @Column()
  token: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.tokens, { onDelete: 'CASCADE' })
  user: UserEntity;
}
