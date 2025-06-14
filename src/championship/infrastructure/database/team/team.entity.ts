import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { ChampionshipEntity } from '../championship/championship.entity';
import { BaseIdEntity } from '../../../../shared/infrastructure/entities/base-id.entity';
import { PilotEntity } from '../pilot/pilot.entity';

@Entity('team')
export class TeamEntity extends BaseIdEntity {
  @Column()
  name: string;

  @Column()
  logo: string;

  @OneToMany(() => PilotEntity, (pilot) => pilot.team)
  pilots: PilotEntity[];

  @ManyToOne(() => ChampionshipEntity, (championship) => championship.teams, {
    onDelete: 'CASCADE',
  })
  championship: ChampionshipEntity;
}
