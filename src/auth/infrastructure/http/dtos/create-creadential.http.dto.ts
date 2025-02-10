import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class createCredentialHttpDto {
  @IsUUID()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  authProvider: string;

  @IsString()
  @IsOptional()
  externalId?: string;
}
