import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginHttpDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'this field is username that corresponds to the user.',
    example: 'my-user',
  })
  username: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'this field is the password, is required for login',
    example: 'my-password',
  })
  password: string;
}
