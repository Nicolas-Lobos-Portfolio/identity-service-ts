import { ErrorCodeMapper } from '../error-code-mapper';
import { ErrorHandler } from './error-handler';

export class ClientErrorHandler implements ErrorHandler {
  private nextHandler?: ErrorHandler;

  setNext(handler: ErrorHandler): ErrorHandler {
    this.nextHandler = handler;
    return handler;
  }

  handle(exception: any) {
    const status = ErrorCodeMapper.getHttpStatus(exception);
    if (status >= 400 && status < 500) {
      return { handled: true, status, message: exception.message };
    }
    return this.nextHandler
      ? this.nextHandler.handle(exception)
      : { handled: false, status: 500, message: 'Unhandled error' };
  }
}
