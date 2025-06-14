import {
  IsArray,
  IsBoolean,
  IsInt,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class DriverDto {
  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  abbr: string | null;

  @IsInt()
  number: number;

  @IsString()
  image: string;
}

export class TeamDto {
  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsString()
  logo: string;
}

export class RankingItemDto {
  @IsInt()
  position: number;

  @ValidateNested()
  @Type(() => DriverDto)
  driver: DriverDto;

  @ValidateNested()
  @Type(() => TeamDto)
  team: TeamDto;

  @IsOptional()
  @IsNumber()
  points: number | null;

  @IsInt()
  wins: number;

  @IsOptional()
  @IsNumber()
  behind: number | null;

  @IsInt()
  season: number;
}

export class RankingsParametersDto {
  @IsString()
  season: string;
}

export class RankingDriversDataDto {
  @IsString()
  get: string;

  @ValidateNested()
  @Type(() => RankingsParametersDto)
  parameters: RankingsParametersDto;

  @IsArray()
  errors: any[];

  @IsInt()
  results: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RankingItemDto)
  response: RankingItemDto[];
}

export class GetRankingsDriverResponseDto {
  @ValidateNested()
  @Type(() => RankingDriversDataDto)
  data: RankingDriversDataDto;

  @IsInt()
  status: number;

  @IsBoolean()
  success: boolean;
}
