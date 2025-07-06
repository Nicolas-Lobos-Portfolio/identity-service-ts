import { IsEmail, IsNotEmpty } from 'class-validator';

export class SendCodeEmailDto {
  @IsEmail({}, { message: 'Email is invalid' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;
}
