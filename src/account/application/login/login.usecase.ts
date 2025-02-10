import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../../../user/domain/user-repository';
import { LoginHttpDto } from '../../../user/infrastructure/controllers/login/login.http.dto';

@Injectable()
export class LoginUseCase {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userRepository: UserRepository,
  ) {}

  async execute(loginDto: LoginHttpDto) {
    const { username, password } = loginDto;
    const user = await this.userRepository.getByUserName(username);
    // if (user.password !== password) {
    const response = this.jwtService.sign({ username, password });
    throw new UnauthorizedException(
      `Invalid credentials, ${response} ,${user}`,
    );
    // }
  }
}
