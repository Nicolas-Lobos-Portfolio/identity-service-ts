import {
  IsArray,
  IsBoolean,
  IsInt,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

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
  @Type(() => TeamDto)
  team: TeamDto;

  @IsInt()
  points: number;

  @IsInt()
  season: number;
}

export class RankingsParametersDto {
  @IsString()
  season: string;
}

export class RankingTeamsDataDto {
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

export class GetRankingsTeamsResponseDto {
  @ValidateNested()
  @Type(() => RankingTeamsDataDto)
  data: RankingTeamsDataDto;

  @IsInt()
  status: number;

  @IsBoolean()
  success: boolean;
}
