import { Inject } from '@nestjs/common';
import { HttpServicePort } from '../../../shared/http-request/domain/http-service-port.shared';
import { AdminAndFinanceHttpServicePort } from '../../domain/services/admin-and-finance/admin-and-finance-service.port';
import { httpConfigProvider } from './http.providers';
import { Injectable } from '../../../shared/dependency-injection/injectable';
@Injectable()
// implements AdminAndFinanceHttpServicePort
export class AdminAndFinanceHttpServiceAdapter {
  constructor() {} // private readonly HttpServicePort: HttpServicePort, // @Inject(httpConfigProvider.client.adminAndFinance.provider)
  async getAdminAndFinance() {
    // const pokemon = await this.HttpServicePort.get('pokemon/ditto');
    // return pokemon;
  }
  getAdminAndFinanceById() {
    throw new Error('Method not implemented.');
  }
  createAdminAndFinance() {
    throw new Error('Method not implemented.');
  }
  updateAdminAndFinance() {
    throw new Error('Method not implemented.');
  }
  deleteAdminAndFinance() {
    throw new Error('Method not implemented.');
  }
}
