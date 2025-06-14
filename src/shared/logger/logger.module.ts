import { Module } from '@nestjs/common';
import { LoggerServicePort } from './domain/logger-service.port';
import { LoggerServiceAdapter } from './infrastructure/logger-service.adapter';
import { LoggerModule as LoggerShared } from 'nestjs-pino';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { IncomingMessage, ServerResponse } from 'http';

@Module({
  imports: [
    LoggerShared.forRootAsync({
      inject: [ConfigService],
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => {
        const transport =
          config.get('environment') === 'production'
            ? undefined
            : {
                target: 'pino-pretty',
                options: {
                  singleLine: true,
                },
              };
        return {
          pinoHttp: {
            customProps: (
              req: IncomingMessage,

              res: ServerResponse<IncomingMessage>,
            ) => ({
              context: 'HTTP',
            }),
            transport,
          },
        };
      },
    }),
  ],
  providers: [
    LoggerServiceAdapter,
    {
      provide: LoggerServicePort,
      useClass: LoggerServiceAdapter,
    },
  ],
  exports: [LoggerServiceAdapter, LoggerServicePort, LoggerShared],
})
export class LoggerModule {}
