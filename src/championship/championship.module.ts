import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseModule } from '../shared/database/database.module';
import { HttpRequestModule } from '../shared/http-request/http.module';
import { F1Controller } from './infrastructure/controller/f1.controller';
import { F1_REPOSITORY } from './infrastructure/database/database.config';
import { F1HttpServicePort } from './domain/services/f1-http-service.port';
import { GetTeamsUseCase } from './application/get-teams/get-teams.usecase';
import { TeamRepositoryPort } from './domain/services/team-repository.port';
import { PilotRepositoryPort } from './domain/services/pilot-repository.port';
import { GetPilotsUseCase } from './application/get-pilots/get-pilots.usecase';
import { httpServiceProvider } from './infrastructure/http/f1/f1-service.provider';
import { SaveF1DataUseCase } from './application/save-f1-data/save-f1-data.usecase';
import { TeamServiceProviders } from './infrastructure/database/team/team.provider';
import { PilotServiceProviders } from './infrastructure/database/pilot/pilot.provider';
import { ChampionshipRepositoryPort } from './domain/services/championship-repository.port';
import { TeamRepositoryAdapter } from './infrastructure/database/team/team-service.adapter';
import { F1PilotHttpServiceAdapter } from './infrastructure/http/f1/formula-1-service.adapter';
import { PilotRepositoryAdapter } from './infrastructure/database/pilot/pilot-repository-service.adapter';
import { ChampionshipRepositoryAdapter } from './infrastructure/database/championship/championship-repository-service.adapter';
import { ChampionshipServiceProviders } from './infrastructure/database/championship/championship.provider';

@Module({
  imports: [
    DatabaseModule.forRootAsync({
      name: F1_REPOSITORY,
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        ...configService.get('database.f1'),
        synchronize: true,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
      }),
      inject: [ConfigService],
    }),

    HttpRequestModule.register(
      httpServiceProvider.providers.f1HttpService,
      'f1ClientHttp.url',
      'f1ClientHttp.timeout',
      'f1ClientHttp.header.Content-Type',
    ),
  ],
  providers: [
    GetPilotsUseCase,
    GetTeamsUseCase,
    SaveF1DataUseCase,
    F1PilotHttpServiceAdapter,
    TeamRepositoryAdapter,
    PilotRepositoryAdapter,
    ChampionshipRepositoryAdapter,
    {
      provide: F1HttpServicePort,
      useExisting: F1PilotHttpServiceAdapter,
    },
    {
      provide: ChampionshipRepositoryPort,
      useExisting: ChampionshipRepositoryAdapter,
    },
    {
      provide: TeamRepositoryPort,
      useExisting: TeamRepositoryAdapter,
    },
    {
      provide: PilotRepositoryPort,
      useExisting: PilotRepositoryAdapter,
    },
    ...PilotServiceProviders,
    ...TeamServiceProviders,
    ...ChampionshipServiceProviders,
  ],
  exports: [],
  controllers: [F1Controller],
})
export class ChampionshipModule {}
