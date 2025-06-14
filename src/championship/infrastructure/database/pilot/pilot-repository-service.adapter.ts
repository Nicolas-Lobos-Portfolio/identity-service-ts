import { Inject } from '@nestjs/common';
import { PilotEntity } from './pilot.entity';
import { pilotRepository } from './pilot.provider';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { PilotRepositoryPort } from '../../../../championship/domain/services/pilot-repository.port';

export class PilotRepositoryAdapter implements PilotRepositoryPort {
  constructor(
    @Inject(pilotRepository)
    private readonly pilotRepository: Repository<PilotEntity>,
  ) {}

  driverRelations(): SelectQueryBuilder<PilotEntity> {
    return this.pilotRepository
      .createQueryBuilder('pilot')
      .leftJoinAndSelect('pilot.team', 'team')
      .leftJoinAndSelect('pilot.championship', 'championship');
  }
  getPilots(): Promise<any> {
    return this.driverRelations().getMany();
  }
  savePilot(driver: any): Promise<any> {
    return this.pilotRepository.save(driver);
  }
}
