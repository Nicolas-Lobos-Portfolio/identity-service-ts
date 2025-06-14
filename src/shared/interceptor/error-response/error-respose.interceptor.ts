import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  InternalServerErrorException,
} from '@nestjs/common';
import { ResponseDto } from '../response.dto';
import { ClientErrorHandler } from './error-chain-responsability/client-handler.error';
import { ServerErrorHandler } from './error-chain-responsability/server-handler.error';

@Catch()
export class ErrorResponseInterceptor implements ExceptionFilter {
  private readonly errorHandler: ClientErrorHandler;

  constructor() {
    this.errorHandler = new ClientErrorHandler();
    const serverErrorHandler = new ServerErrorHandler();
    this.errorHandler.setNext(serverErrorHandler);
  }
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    let trace: string | undefined;

    // Si es una excepción HTTP, extraemos el código de estado
    if (exception instanceof HttpException) {
      exception = {
        status: exception.getStatus(),
        message: exception.message,
      };
    }

    // Usamos la cadena de responsabilidad para manejar errores
    const result = this.errorHandler.handle(exception);

    // Solo mostramos el stack trace en desarrollo
    if (process.env.NODE_ENV !== 'production') {
      trace = exception.stack;
    }

    response
      .status(result.status)
      .json(ResponseDto.error(result.message, result.status, trace));
  }
}
