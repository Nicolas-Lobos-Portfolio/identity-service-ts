import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { SecurityServiceAdapter } from '../infrastructure/security-service.adapter';
import { Injectable } from '../../../shared/dependency-injection/injectable';
import { Role } from '../domain/role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly securityService: SecurityServiceAdapter) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers['authorization']?.split(' ')[1];

    if (!token) throw new ForbiddenException('No token provided');

    const userRole = this.securityService.getUserRoleFromToken(token);

    // Get roles required by the route
    const requiredRoles = this.getRoles(context);

    if (requiredRoles.includes(userRole)) {
      return true;
    } else {
      throw new ForbiddenException('You do not have permission');
    }
  }

  private getRoles(context: ExecutionContext): Role[] {
    const roles = Reflect.getMetadata('roles', context.getHandler());
    return roles || [];
  }
}
