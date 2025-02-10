import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class BaseDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'field correspond to status by record' })
  status: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'field correspond to create date record' })
  createAt: Date;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'field correspond to update date record' })
  updateAt: Date;
}