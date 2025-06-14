import { TeamEntity } from '../team/team.entity';
import { Entity, Column, ManyToOne } from 'typeorm';
import { ChampionshipEntity } from '../championship/championship.entity';
import { BaseIdEntity } from '../../../../shared/infrastructure/entities/base-id.entity';

@Entity('pilot')
export class PilotEntity extends BaseIdEntity {
  @Column()
  name: string;

  @Column({
    nullable: true,
  })
  abbr: string;

  @Column()
  number: number;

  @Column()
  img: string;

  @Column({
    nullable: true,
  })
  behind?: number;

  @Column()
  wins: number;
  @ManyToOne(() => TeamEntity, (team) => team.pilots, {
    onDelete: 'SET NULL',
    nullable: true,
  })
  team: TeamEntity;

  @ManyToOne(() => ChampionshipEntity, (championship) => championship.pilots, {
    onDelete: 'CASCADE',
  })
  championship: ChampionshipEntity;
}
