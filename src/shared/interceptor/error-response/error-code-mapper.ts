import { BadRequestError } from './errors.ts/bad-request.error';
import { ForbiddenError } from './errors.ts/forbidden.error';
import { NotFoundError } from './errors.ts/not-found.error';
import { ServiceUnavailableError } from './errors.ts/service.error';
import { UnauthorizedError } from './errors.ts/unauthorized.error';
import { ValidationError } from './errors.ts/validation.error';

export class ErrorCodeMapper {
  private static errorMap: Map<Function, number> = new Map([
    // [DatabaseConnectionError, 500],
    // [TimeoutError, 504],
    [ServiceUnavailableError, 503],
    [ValidationError, 422],
    [BadRequestError, 400],
    [UnauthorizedError, 401],
    [ForbiddenError, 403],
    [NotFoundError, 404],
    // [ConflictError, 409]
  ]);

  static getHttpStatus(exception: any): number {
    return this.errorMap.get(exception.constructor) || 500; // Si no está en el mapa, devuelve 500 por defecto
  }
}
