import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { EmailServicePort } from '../domain/email-service-port';

@Injectable()
export class EmailServiceAdapter implements EmailServicePort {
  constructor(private readonly mailerService: MailerService) {}

  async send(to: string, code: string): Promise<void> {
    try {
      await this.mailerService.sendMail({
        to,
        subject: 'Código de verificación',
        html: `<h1>Tu código de verificación es: ${code}</h1>`,
      });
    } catch (error) {
      console.log('error', JSON.stringify(error.message));
      throw new Error(`Error sending email ${JSON.stringify(error)}`);
    }
  }
}
