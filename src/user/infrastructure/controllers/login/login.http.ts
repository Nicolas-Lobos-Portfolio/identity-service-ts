import { LoginHttpDto } from './login.http.dto';
import { Controller, Post } from '@nestjs/common';
import { LoginUseCase } from '@auth/application/login/login.usecase';

@Controller('login')
export class LoginController {
  constructor(private readonly loginUseCase: LoginUseCase) {}

  @Post('signin')
  signin(login: LoginHttpDto) {
    return this.loginUseCase.execute(login);
  }
}
