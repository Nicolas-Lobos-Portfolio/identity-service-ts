import { Body, Controller, Inject, Post } from '@nestjs/common';
import { LoginDto } from '@identity/application/login/login.dto';
import { LoginUseCase } from '@identity/application/login/login.usecase';
import { CheckCodeUseCase } from '@identity/application/check-code/check-code.usecase';
import { SendMailCodeUseCase } from '@identity/application/send-code-mail/send-code-mail.usecase';
import { CreateCredentialDto } from '@identity/application/create-credential/dto/create-credential.dto';
import { CreateCredentialUseCase } from '@identity/application/create-credential/create-credential.usecase';

@Controller('identity')
export class AuthController {
  constructor(
    @Inject(CheckCodeUseCase)
    private readonly checkCodeUseCase: CheckCodeUseCase,
    @Inject(CreateCredentialUseCase)
    private readonly createCredentialUseCase: CreateCredentialUseCase,
    @Inject(SendMailCodeUseCase)
    private readonly sendMailCodeUseCase: SendMailCodeUseCase,
    @Inject(LoginUseCase)
    private readonly loginUseCase: LoginUseCase,
  ) {}

  @Post('send-code-mail')
  sendCodeMail(@Body() data: any) {
    return this.sendMailCodeUseCase.execute(data);
  }
  @Post('check-code')
  checkCode(@Body() data: any) {
    return this.checkCodeUseCase.execute(data);
  }
  @Post('create-credential')
  createCredential(@Body() data: CreateCredentialDto) {
    return this.createCredentialUseCase.execute(data);
  }

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.loginUseCase.execute(loginDto);
  }
}
