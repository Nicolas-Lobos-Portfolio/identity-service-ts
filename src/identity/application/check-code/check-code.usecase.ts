import { Inject } from '@nestjs/common';
import { CheckCodeDto } from './check-code.dto';
import { plainToInstance } from 'class-transformer';
import { Injectable } from '@shared/dependency-injection/injectable';
import { LoggerServicePort } from '@shared/logger/domain/logger-service.port';
import { CacheServicePort } from '@shared/cache/domain/cache-service-port.shared';

@Injectable()
export class CheckCodeUseCase {
  constructor(
    @Inject(CacheServicePort)
    private readonly cacheServicePort: CacheServicePort,
    @Inject(LoggerServicePort)
    private readonly loggerServicePort: LoggerServicePort,
  ) {}
  async execute(data) {
    try {
      const checkCodeDto = plainToInstance(CheckCodeDto, data, {
        // excludeExtraneousValues: true,
      });
      const code = await this.cacheServicePort.get(checkCodeDto.code);
      if (!code) {
        throw new Error('Code not found code in the system');
      }
      this.loggerServicePort.log(`the code is : ${code}`);
      return code;
    } catch (error) {
      throw new Error(`Error checking code ${JSON.stringify(error.message)}`);
    }
  }
}
