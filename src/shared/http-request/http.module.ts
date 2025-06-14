// import { DynamicModule, Module } from '@nestjs/common';
// import { HttpServiceAdapter } from './infrastructure/http-service.adapter.shared';
// @Module({})
// export class HttpRequestModule {
//   static register(providerToken, baseURL: string, timeout: number, headers): DynamicModule {
//     return {
//       module: HttpRequestModule,
//       providers: [
//         {
//           provide: providerToken,
//           useFactory: () => new HttpServiceAdapter(baseURL, timeout, headers),
//         },
//       ],
//       exports: [providerToken],
//     };
//   }
// }

import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HttpServiceAdapter } from './infrastructure/http-service.adapter.shared';

@Module({})
export class HttpRequestModule {
  static register(
    providerToken: string,
    url: string,
    timeouts: string,
    header: any,
  ): DynamicModule {
    return {
      module: HttpRequestModule,
      imports: [ConfigModule],
      providers: [
        {
          provide: providerToken,
          useFactory: (configService: ConfigService) => {
            const baseURL = configService.get<string>(url) || 'Not url';
            const timeout = configService.get<number>(timeouts) || 5000;
            const headers = configService.get<any>(header);
            return new HttpServiceAdapter(baseURL, timeout, headers);
          },
          inject: [ConfigService],
        },
      ],
      exports: [providerToken],
    };
  }
}
