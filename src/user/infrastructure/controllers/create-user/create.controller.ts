import { PrimitiveUser } from '@user/domain/user';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserUseCase } from '@user/application/create/create-user.usecase';
import { CreateUserHttpDto } from '@user/infrastructure/controllers/create-user/create-user.http.dto';

@Controller('user')
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  async createUser(@Body() userDto: CreateUserHttpDto): Promise<PrimitiveUser> {
    return await this.createUserUseCase.execute(userDto);
  }
}
