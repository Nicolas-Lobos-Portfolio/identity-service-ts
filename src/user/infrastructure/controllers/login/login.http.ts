import { Controller, Post } from '@nestjs/common';
import { LoginUseCase } from 'src/auth/application/login/login.usecase';
import { LoginHttpDto } from './login.http.dto';

@Controller('login')
export class LoginController {
  constructor(private readonly loginUseCase: LoginUseCase) {}

  @Post('signin')
  signin(login: LoginHttpDto) {
    return this.loginUseCase.execute(login);
  }
}
