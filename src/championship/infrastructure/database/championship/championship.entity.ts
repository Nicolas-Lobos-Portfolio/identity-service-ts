import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { TeamEntity } from '../team/team.entity';
import { PilotEntity } from '../pilot/pilot.entity';
import { BaseIdEntity } from '../../../../shared/infrastructure/entities/base-id.entity';

@Entity('championship')
export class ChampionshipEntity extends BaseIdEntity {
  @Column()
  position: number;

  @Column({
    nullable: true,
  })
  points?: number;

  @Column()
  season: number;

  @OneToMany(() => PilotEntity, (pilot) => pilot.championship)
  pilots: PilotEntity[];

  @OneToMany(() => TeamEntity, (team) => team.championship)
  teams: TeamEntity[];
}
