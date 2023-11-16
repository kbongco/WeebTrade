import { IsNumber, IsString } from 'class-validator';
export class CreateAnimeDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  genre: string;

  @IsString()
  image: string;
}
