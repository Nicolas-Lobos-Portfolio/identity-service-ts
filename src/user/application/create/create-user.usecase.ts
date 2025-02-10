import { Injectable } from '../../../shared/dependency-injection/injectable';
import { PrimitiveUser, User } from '../../domain/user';
import { UserRepository } from '../../domain/user-repository';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userDto: CreateUserDto): Promise<PrimitiveUser> {
    const user = User.create(userDto);
    await this.userRepository.create(user);
    return user.toValue();
  }
}
