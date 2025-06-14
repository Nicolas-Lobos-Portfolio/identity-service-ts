import { Repository } from 'typeorm';
import { Inject } from '@nestjs/common';
import { ChampionshipEntity } from './championship.entity';
import { championshipRepository } from './championship.provider';
import { ChampionshipRepositoryPort } from '../../../../championship/domain/services/championship-repository.port';

export class ChampionshipRepositoryAdapter
  implements ChampionshipRepositoryPort
{
  constructor(
    @Inject(championshipRepository)
    private readonly championshipRepository: Repository<ChampionshipEntity>,
  ) {}
  save(championshipEntity: ChampionshipEntity) {
    return this.championshipRepository.save(championshipEntity);
  }
}
