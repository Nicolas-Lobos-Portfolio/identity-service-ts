import { Observable } from 'rxjs';
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Injectable } from '../../../shared/dependency-injection/injectable';
import { SecurityServiceAdapter } from '../infrastructure/security-service.adapter';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private readonly securityService: SecurityServiceAdapter) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers['authorization']?.split(' ')[1];

    if (!token) return false;

    return this.securityService.validateToken(token);
  }
}
