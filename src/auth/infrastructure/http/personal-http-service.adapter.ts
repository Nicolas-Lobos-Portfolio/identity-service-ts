import { Inject, Injectable } from '@nestjs/common';
import { PersonalHttpServicePort } from '../../../auth/domain/services/personal-http-service.port';
import { HttpServicePort } from '../../../shared/http-request/domain/http-service-port.shared';
import { httpConfigProvider } from './http.providers';
@Injectable()
// implements PersonalHttpServicePort
export class PersonalHttpServiceAdapter {
  constructor() {} // private readonly HttpServicePort: HttpServicePort, // @Inject(httpConfigProvider.client.personal.provider)
  async getPersonal() {
    // const pokemon = await this.HttpServicePort.get('pokemon/ditto');
    // return pokemon;
  }
  getPersonalById() {
    throw new Error('Method not implemented.');
  }
  createPersonal() {
    throw new Error('Method not implemented.');
  }
  updatePersonal() {
    throw new Error('Method not implemented.');
  }
  deletePersonal() {
    throw new Error('Method not implemented.');
  }
}
