import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { BaseIdEntity } from '@shared/infrastructure/entities/base-id.entity';

@Entity('chat')
export class ChatEntity extends BaseIdEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  senderId: string; // quien envía el mensaje

  @Column()
  receiverId: string; // quien recibe el mensaje

  @Column('text')
  content: string; // texto del mensaje
}
