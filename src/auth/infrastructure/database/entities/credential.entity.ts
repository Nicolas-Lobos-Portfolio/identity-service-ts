import { Column, Entity } from 'typeorm';
import { BaseIdEntity } from '../../../../shared/infrastructure/entities/base-id.entity';

@Entity('credential')
export class CredentialEntity extends BaseIdEntity {
  @Column('uuid')
  userId: string;
  @Column('text')
  username: string;
  @Column('text')
  password: string;
  @Column('text')
  authProvider: string;
  @Column('text')
  externalId: string;
}
