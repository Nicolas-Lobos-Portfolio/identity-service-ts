import { Module } from '@nestjs/common';
import { EmailServicePort } from './domain/email-service-port';
import { EmailServiceAdapter } from './infrastructure/email-service-adapter';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    // mail server connection
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        transport: {
          // service: configService.get<string>('smtpHost'), // process.env.SMTP_HOST,/ // Servidor SMTP de Brevo
          host: configService.get<string>('smtpHost'), // process.env.SMTP_HOST,/ // Servidor SMTP de Brevo
          port: +configService.get<number>('smtpPort'), //+process.env.SMTP_PORT,// // Puerto SMTP (587 para TLS, 465 para SSL)
          secure: false, //configService.get<string>('smtpSecure'), // TRUE para SSL (465), FALSE para TLS (587)
          auth: {
            user: configService.get<string>('smtpUser'), // Usuario SMTP
            pass: configService.get<string>('smtpPassword'), // Contraseña SMTP
          },
        },
        defaults: {
          from: configService.get<string>('smtpUser'), // Remitente por defecto
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    EmailServiceAdapter,
    {
      provide: EmailServicePort,
      useExisting: EmailServiceAdapter,
    },
  ],
  exports: [EmailServicePort, EmailServiceAdapter],
})
export class EmailModule {}
