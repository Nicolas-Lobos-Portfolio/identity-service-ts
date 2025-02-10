import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { BaseDto } from "./base.dto";

export class BaseIdDto extends BaseDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({description: 'field correspond to unique identifier by record'})
  id: string;
}