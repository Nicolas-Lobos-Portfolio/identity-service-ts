import { Inject, Injectable } from '@nestjs/common';
import { TeamRepositoryPort } from '@championship/domain/services/team-repository.port';

@Injectable()
export class GetTeamsUseCase {
  constructor(
    @Inject(TeamRepositoryPort)
    private readonly teamRepositoryPort: TeamRepositoryPort,
  ) {}

  execute() {
    return this.teamRepositoryPort.getTeams();
  }
}
