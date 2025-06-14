import { TeamEntity } from '../../../championship/infrastructure/database/team/team.entity';

export interface TeamRepositoryPort {
  getTeams(): Promise<Array<TeamEntity>>;
  getTeamById(id: string): Promise<TeamEntity>;
  getTeamByName(id: string): Promise<TeamEntity>;

  saveTeam(team: TeamEntity): Promise<TeamEntity>;
}

export const TeamRepositoryPort = Symbol('TeamRepositoryPort');
