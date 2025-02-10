import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserHttpDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: [String] })
  name: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: [String] })
  lastname: string;

  age: number;

  gender: string;

  birthday: Date;
  
  // @IsString()
  // @IsNotEmpty()
  // @ApiProperty({ type: [String] })
  // country: string;
  // @IsString()
  // @IsNotEmpty()
  // @IsEmail()
  // @ApiProperty({ type: [String] })
  // email: string;
}
