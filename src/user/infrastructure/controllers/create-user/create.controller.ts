import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserUseCase } from '../../../application/create/create-user.usecase';
import { CreateUserHttpDto } from './create-user.http.dto';
import { PrimitiveUser } from '../../../domain/user';

@Controller('user')
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  async createUser(@Body() userDto: CreateUserHttpDto): Promise<PrimitiveUser> {
    return await this.createUserUseCase.execute(userDto);
  }
}
