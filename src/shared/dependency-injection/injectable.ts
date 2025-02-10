import { Injectable as NestInjectable } from '@nestjs/common';

export function Injectable(): ClassDecorator {
  return NestInjectable();
}
