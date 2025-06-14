import { Inject, Injectable } from '@nestjs/common';
import { F1HttpServicePort } from '../../domain/services/f1-http-service.port';
import { PilotRepositoryPort } from 'src/championship/domain/services/pilot-repository.port';

@Injectable()
export class GetPilotsUseCase {
  constructor(
    @Inject(F1HttpServicePort)
    private readonly formula1ServicePort: F1HttpServicePort,
    @Inject(PilotRepositoryPort)
    private readonly pilotRepositoryPort: PilotRepositoryPort,
  ) {}

  execute() {
    return this.pilotRepositoryPort.getPilots();
  }
}
