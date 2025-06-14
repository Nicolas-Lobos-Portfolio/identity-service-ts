import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseDto } from './response.dto';

@Injectable()
export class SuccessResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        // Si el controlador ya usa ResponseDto, no lo modifica
        if (data instanceof ResponseDto) return data;

        // Envuelve la respuesta en ResponseDto.success()
        const status = context.switchToHttp().getResponse().statusCode;
        return ResponseDto.success(data, status);
      }),
    );
  }
}
