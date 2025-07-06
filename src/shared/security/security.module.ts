import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { RolesGuard } from './application/roles.guard';
import { EncryptServicePort } from './domain/encrypt-service.port';
import { SecurityServicePort } from './domain/security-service.port';
import { AuthenticationGuard } from './application/authentication.guard';
import { EncryptServiceAdapter } from './infrastructure/encrypt-service.adapter';
import { SecurityServiceAdapter } from './infrastructure/security-service.adapter';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'super-secret-key',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [
    AuthenticationGuard,
    RolesGuard,
    SecurityServiceAdapter,
    EncryptServiceAdapter,
    {
      provide: SecurityServicePort,
      useExisting: SecurityServiceAdapter,
    },
    {
      provide: EncryptServicePort,
      useExisting: EncryptServiceAdapter,
    },
  ],
  exports: [
    SecurityServicePort,
    EncryptServicePort,
    AuthenticationGuard,
    RolesGuard,
  ],
})
export class SecurityModule {}
