import { Inject } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { LoggerServicePort } from '../domain/logger-service.port';

export class LoggerServiceAdapter implements LoggerServicePort {
  constructor(
    @Inject(Logger)
    private readonly logger: Logger,
  ) {}
  log(message: any, ...optionalParams: any[]): void {
    console.log(this.logger);
    return this.logger.log(message, ...optionalParams);
  }
  debug(message: any, ...optionalParams: any[]): void {
    return this.logger.debug(message, ...optionalParams);
  }
  error(message: any, ...optionalParams: any[]): void {
    return this.logger.error(message, ...optionalParams);
  }
  warning(message: any, ...optionalParams: any[]): void {
    return this.logger.warn(message, ...optionalParams);
  }
}
