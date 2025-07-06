import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Role } from '../domain/role.enum';
import { SecurityServicePort } from '../domain/security-service.port';

@Injectable()
export class SecurityServiceAdapter implements SecurityServicePort {
  constructor(private readonly jwtService: JwtService) {}

  // Generar el token
  async generateToken<T>(payload: T): Promise<string> {
    const payloadToString = JSON.stringify(payload);
    return this.jwtService.sign({ payload: payloadToString });
  }

  // Valida el token
  async validateToken(token: string): Promise<boolean> {
    try {
      const decoded = this.jwtService.verify(token);
      return !!decoded;
    } catch (error) {
      return false;
    }
  }

  // Decodifica el token
  decodeToken<T>(token: string): T {
    return this.jwtService.decode(token) as T;
  }

  // Obtiene el rol del usuario desde el token
  getUserRoleFromToken(token: string): Role {
    const decodedToken = this.decodeToken<any>(token);
    return decodedToken?.role;
  }
}
