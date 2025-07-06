import { PilotEntity } from '@championship/infrastructure/database/pilot/pilot.entity';

export interface PilotRepositoryPort {
  getPilots(): Promise<Array<PilotEntity>>;
  savePilot(pilot: PilotEntity): Promise<any>;
}

export const PilotRepositoryPort = Symbol('PilotRepositoryPort');
