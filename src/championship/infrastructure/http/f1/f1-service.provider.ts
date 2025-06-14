// import { ConfigService } from '@nestjs/config';
// import { BadRequestError } from '../../../../shared/interceptor/error-response/errors.ts/bad-request.error';

// export const service = {
//   F1HttpService: 'F1HttpService',
// };

// export const createF1HttpServiceProvider = async (
//   configService: ConfigService,
// ): Promise<any> => {
//   return new Promise((resolve, reject) => {
//     resolve({
//       name: service.F1HttpService,
//       url: configService.get<string>('httpClient.f1.url'),
//       timeout: 50, //configService.get<number>('httpClients.f1.timeout'),
//       headers: {
//         'X-RapidAPI-Key': configService.get<string>('httpClient.f1.key'),
//       },
//     });
//     // reject(new BadRequestError(`load env for ${service.F1HttpService}`));
//   });
// };

import { ConfigService } from '@nestjs/config';
import { HttpServiceAdapter } from '../../../../shared/http-request/infrastructure/http-service.adapter.shared';
// import { HttpServiceAdapter } from '../../../core/http-request/infrastructure/http-service.adapter.shared';

export const httpServiceProvider = {
  providers: {
    f1HttpService: 'F1_HTTP_SERVICE_PORT',
  },
};

export const f1HttpServiceProvider = {
  provide: httpServiceProvider.providers.f1HttpService,
  useFactory: (configService: ConfigService) => {
    const baseURL =
      configService.get<string>('httpClients.f1.url') ||
      'https://api.example.com';
    const timeout = configService.get<number>('httpClients.f1.timeout') || 5000;
    const headers = {
      'Content-Type':
        configService.get<string>('httpClients.f1.header.Content-Type') ||
        'application/json',
    };
    return new HttpServiceAdapter(baseURL, timeout, headers);
  },
  inject: [ConfigService],
};
