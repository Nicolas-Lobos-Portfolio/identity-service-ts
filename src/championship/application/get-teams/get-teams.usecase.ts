import { Inject, Injectable } from '@nestjs/common';
import { F1HttpServicePort } from '../../domain/services/f1-http-service.port';
import { TeamRepositoryPort } from 'src/championship/domain/services/team-repository.port';

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
