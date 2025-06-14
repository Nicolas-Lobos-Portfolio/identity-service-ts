// import { HttpServicePort } from '../../../../core/http-request/domain/http-service-port.shared';
// import { MMSServicePort } from '../../../domain/services/mms-service.port';
import { Inject } from '@nestjs/common';
import { service } from './mms-service.provider';

export class MMSServiceAdapter {
  constructor() {} // private readonly httpServicePort: HttpServicePort, // @Inject(service.MMSHttpService)
  async getUserProfile(email: string): Promise<any> {
    console.log(email);
    // return await this.httpServicePort
    //   .get('/')
    //   .then((response) => {
    //     console.log('Response:', response);
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
  }
}
