import { Inject, Injectable } from '@nestjs/common';
import { RankingDriversDataDto } from './dto/driver.dto';
import { RankingItemDto, RankingTeamsDataDto } from './dto/team.dto';
import { TeamEntity } from '../../../championship/infrastructure/database/team/team.entity';
import { PilotEntity } from '../../../championship/infrastructure/database/pilot/pilot.entity';
import { F1HttpServicePort } from '../../../championship/domain/services/f1-http-service.port';
import { TeamRepositoryPort } from '../../../championship/domain/services/team-repository.port';
import { PilotRepositoryPort } from '../../../championship/domain/services/pilot-repository.port';
import { ChampionshipEntity } from '../../infrastructure/database/championship/championship.entity';
import { ChampionshipRepositoryPort } from '../../../championship/domain/services/championship-repository.port';

@Injectable()
export class SaveF1DataUseCase {
  constructor(
    @Inject(F1HttpServicePort)
    private readonly f1HttpServicePort: F1HttpServicePort,
    @Inject(PilotRepositoryPort)
    private readonly pilotRepositoryPort: PilotRepositoryPort,
    @Inject(TeamRepositoryPort)
    private readonly teamRepositoryPort: TeamRepositoryPort,
    @Inject(ChampionshipRepositoryPort)
    private readonly championshipRepositoryPort: ChampionshipRepositoryPort,
  ) {}

  async execute() {
    const drivers: RankingDriversDataDto =
      await this.f1HttpServicePort.getDrivers();
    const teams: RankingTeamsDataDto = await this.f1HttpServicePort.getTeams();
    const teamsSaved: Array<TeamEntity> = [];
    for (const response of teams.response) {
      await this.processTeams(response, teamsSaved);
    }
    // juretag@agrosuper.com

    for (const response of drivers.response) {
      const team = teams.response.find(
        (responseDto) => responseDto.team.name === response.team.name,
      );

      const teamEntity = await this.teamRepositoryPort.getTeamByName(
        team.team.name,
      );
      const pilot = new PilotEntity();
      pilot.name = response.driver.name;
      pilot.abbr = response.driver.abbr;
      pilot.behind = response.behind;
      pilot.img = response.driver.image;
      pilot.number = response.driver.number;
      pilot.wins = response.wins;
      pilot.team = teamEntity;

      const pilotChampionship = new ChampionshipEntity();
      pilotChampionship.points = response.points;
      pilotChampionship.season = response.season;
      pilotChampionship.position = response.position;

      const pilotChampionshipSaved =
        await this.championshipRepositoryPort.save(pilotChampionship);
      pilot.championship = pilotChampionshipSaved;
      await this.pilotRepositoryPort.savePilot(pilot);
    }
  }

  private async processTeams(
    response: RankingItemDto,
    teamsSaved: TeamEntity[],
  ) {
    const team = new TeamEntity();
    team.name = response.team.name;
    team.logo = response.team.logo;
    const teamChampionship = new ChampionshipEntity();
    teamChampionship.points = response.points;
    teamChampionship.season = response.season;
    teamChampionship.position = response.position;
    const teamChampionshipSaved =
      await this.championshipRepositoryPort.save(teamChampionship);
    team.championship = teamChampionshipSaved;
    await this.teamRepositoryPort.saveTeam(team);
    const responseBd = await this.teamRepositoryPort.getTeamById(team.id);
    teamsSaved.push(responseBd);
  }
}
