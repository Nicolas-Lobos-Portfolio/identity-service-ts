import { CreateUserDto } from './create-user.dto';
import { PrimitiveUser, User } from '../../domain/user';
import { UserRepository } from '../../domain/user-repository';
import { Injectable } from '@shared/dependency-injection/injectable';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userDto: CreateUserDto): Promise<PrimitiveUser> {
    const user = User.create(userDto);
    await this.userRepository.create(user);
    return user.toValue();
  }
}
