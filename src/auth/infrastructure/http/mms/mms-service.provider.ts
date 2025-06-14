import { ConfigService } from '@nestjs/config';
import { BadRequestError } from '../../../../shared/interceptor/error-response/errors.ts/bad-request.error';

export enum service {
  MMSHttpService = 'MMSHttpService',
}

export const createMMSHttpServiceProvider = async (
  configService: ConfigService,
): Promise<any> => {
  return new Promise((resolve, reject) => {
    resolve({
      name: service.MMSHttpService,
      url: configService.get<string>('httpClients.mms.url'),
      timeout: configService.get<number>('httpClients.mms.timeout'),
      headers: {
        'Content-Type': configService.get<string>(
          'httpClients.mms.header.Content-Type',
        ),
      },
    });
    reject(new BadRequestError(`load env for ${service.MMSHttpService}`));
  });
};
