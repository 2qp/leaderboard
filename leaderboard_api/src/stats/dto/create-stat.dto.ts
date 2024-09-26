import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateStatDto {
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @IsString()
  @IsNotEmpty()
  userName: string;

  @IsOptional()
  @IsString()
  avatarUrl?: string;

  @IsNumber()
  @IsNotEmpty()
  killCount: number;
}
