import { Inject } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { SendCodeEmailDto } from './send-code-email.dto';
import { generateRandomCode } from './helper/generate-random-code';
import { Injectable } from '@shared/dependency-injection/injectable';
import { EmailServicePort } from '@shared/email/domain/email-service-port';
import { CacheServicePort } from '@shared/cache/domain/cache-service-port.shared';

@Injectable()
export class SendMailCodeUseCase {
  constructor(
    @Inject(EmailServicePort)
    private readonly emailServicePort: EmailServicePort,
    @Inject(CacheServicePort)
    private readonly cacheServicePort: CacheServicePort,
  ) {}
  async execute(data) {
    try {
      const codeEmailDto = this.validateDto(data);
      const code = await this.generateUniqueRandomCode();
      this.emailServicePort.send(
        codeEmailDto.email,
        `Código de verificación es ${code}`,
      );
      this.cacheServicePort.set(code, code);
      return JSON.stringify(data);
    } catch (error) {
      console.log('error', JSON.stringify(error.message));
      throw new Error(`Error sending email ${JSON.stringify(error.message)}`);
    }
  }

  private validateDto(data): SendCodeEmailDto {
    const sendCodeEmailDto = plainToClass(SendCodeEmailDto, data);
    validate(sendCodeEmailDto).then((errors) => {
      if (errors.length > 0) {
        console.log('Validation failed: ', errors);
      } else {
        console.log('Validation succeeded: ', sendCodeEmailDto);
      }
    });

    return sendCodeEmailDto;
  }
  private async generateUniqueRandomCode(): Promise<string> {
    try {
      let code: string;
      const cacheResponse = await this.cacheServicePort.get(code);
      console.log('el cacehResponse es : ', cacheResponse);
      do {
        code = generateRandomCode();
      } while ((await this.cacheServicePort.get(code)) !== null); // Mientras el código ya exista en Redis, sigue generando
      return code;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
