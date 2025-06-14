import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SecurityServiceAdapter } from './infrastructure/security-service.adapter';
import { AuthenticationGuard } from './application/authentication.guard';
import { RolesGuard } from './application/roles.guard';
import { SecurityServicePort } from './domain/security-service.port';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'super-secret-key',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [
    SecurityServiceAdapter,
    {
      provide: SecurityServicePort,
      useExisting: SecurityServiceAdapter,
    },
    AuthenticationGuard,
    RolesGuard,
  ],
  exports: [
    SecurityServicePort,
    SecurityServiceAdapter,
    AuthenticationGuard,
    RolesGuard,
  ],
})
export class SecurityModule {}
