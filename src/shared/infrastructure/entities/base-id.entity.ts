import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class BaseIdEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('datetime', {
    // Cambiado a 'datetime2'
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column('datetime', {
    // Cambiado a 'datetime2'
    name: 'updated_at',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
