import { Body, Controller, Post } from '@nestjs/common';
import { LoginUseCase } from '../../../auth/application/login/login.usecase';
import { LoginHttpDto } from '../../../user/infrastructure/controllers/login/login.http.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly LoginUseCase: LoginUseCase) {}

  @Post('login')
  async login(@Body() data: LoginHttpDto) {
    return await this.LoginUseCase.execute(data);
  }
}
