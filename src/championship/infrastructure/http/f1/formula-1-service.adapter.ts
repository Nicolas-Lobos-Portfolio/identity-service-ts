import { Inject } from '@nestjs/common';
import { httpServiceProvider } from './f1-service.provider';
import { TeamDto } from '../../../application/get-teams/dto/get-team.dto';
import { F1HttpServicePort } from '../../../domain/services/f1-http-service.port';
import { HttpServicePort } from '../../../../shared/http-request/domain/http-service-port.shared';
export class F1PilotHttpServiceAdapter implements F1HttpServicePort {
  constructor(
    @Inject(httpServiceProvider.providers.f1HttpService)
    private readonly httpServicePort: HttpServicePort,
  ) {}
  saveDrivers(driver: any): Promise<any> {
    throw new Error('Method not implemented.');
  }

  getTeams(): Promise<TeamDto> {
    return this.httpServicePort.get('rankings/teams?season=2025');
  }
  async getDrivers(): Promise<any> {
    return await this.httpServicePort
      .get('rankings/drivers?season=2025')
      .then((response) => {
        console.log('Response:', response);
        return response;
      })
      .catch((error) => {
        console.error('Error:', error);
        throw new Error('Method not implemented.');
      });
  }
  getConstructors(): Promise<any> {
    throw new Error('Method not implemented.');
  }
  getRaces(): Promise<any> {
    throw new Error('Method not implemented.');
  }
  getResults(): Promise<any> {
    throw new Error('Method not implemented.');
  }
  getDriverStandings(): Promise<any> {
    throw new Error('Method not implemented.');
  }
  async getUserProfile(email: string): Promise<any> {
    console.log(email);
    return await this.httpServicePort
      .get('/')
      .then((response) => {
        console.log('Response:', response);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}
