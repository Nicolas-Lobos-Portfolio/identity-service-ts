import { Inject, Injectable } from '@nestjs/common';
import { PilotRepositoryPort } from '@championship/domain/services/pilot-repository.port';

@Injectable()
export class GetPilotsUseCase {
  constructor(
    @Inject(PilotRepositoryPort)
    private readonly pilotRepositoryPort: PilotRepositoryPort,
  ) {}

  execute() {
    return this.pilotRepositoryPort.getPilots();
  }
}
