import { Inject } from '@nestjs/common';
import { TeamEntity } from './team.entity';
import { teamRepository } from './team.provider';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { TeamRepositoryPort } from '../../../../championship/domain/services/team-repository.port';

export class TeamRepositoryAdapter implements TeamRepositoryPort {
  constructor(
    @Inject(teamRepository)
    private readonly teamRepository: Repository<TeamEntity>,
  ) {}
  teamRelation(): SelectQueryBuilder<TeamEntity> {
    return this.teamRepository
      .createQueryBuilder('team')
      .leftJoinAndSelect('team.pilots', 'pilots')
      .leftJoinAndSelect('team.championship', 'championship');
  }
  async getTeamByName(name: string): Promise<TeamEntity> {
    const response = await this.teamRelation()
      .andWhere('team.name = :name', {
        name,
      })
      .getOne();
    console.log(response);
    return response;
  }

  async getTeamById(id: string): Promise<any> {
    const response = await this.teamRelation()
      .andWhere('team.id = :id', {
        id,
      })
      .getOne();
    console.log(response);
    return response;
  }

  async getTeams(): Promise<any> {
    return await this.teamRelation().getMany();
  }
  async saveTeam(team: any): Promise<any> {
    return await this.teamRepository.save(team);
  }
}
