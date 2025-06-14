import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { SuccessResponseInterceptor } from './success-response.interceptor';
import { ErrorResponseInterceptor } from './error-response/error-respose.interceptor';

@Module({
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: SuccessResponseInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: ErrorResponseInterceptor,
    },
  ],
})
export class InterceptorModule {}
