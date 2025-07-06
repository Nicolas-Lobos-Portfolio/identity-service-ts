import { IsNotEmpty, IsString } from 'class-validator';

export class CheckCodeDto {
  @IsNotEmpty({ message: 'Code is required' })
  @IsString({ message: 'Code format is incorrect' })
  code: string;
}
