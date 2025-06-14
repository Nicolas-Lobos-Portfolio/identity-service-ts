import { Controller, Get, Inject, Post } from '@nestjs/common';
import { GetTeamsUseCase } from '../../application/get-teams/get-teams.usecase';
import { GetPilotsUseCase } from '../../application/get-pilots/get-pilots.usecase';
import { SaveF1DataUseCase } from '../../../championship/application/save-f1-data/save-f1-data.usecase';

@Controller('f1')
export class F1Controller {
  constructor(
    @Inject(GetPilotsUseCase)
    private readonly getPilotsUseCase: GetPilotsUseCase,
    @Inject(GetTeamsUseCase)
    private readonly getTeamsUseCase: GetTeamsUseCase,
    @Inject(SaveF1DataUseCase)
    private readonly saveF1DataUseCase: SaveF1DataUseCase,
  ) {}

  @Get('pilots')
  getPilots() {
    return this.getPilotsUseCase.execute();
  }

  @Get('teams')
  getTeams() {
    return this.getTeamsUseCase.execute();
  }

  @Post('load-database')
  loadDatabase() {
    return this.saveF1DataUseCase.execute();
  }
}
