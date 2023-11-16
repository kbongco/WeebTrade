import { Controller, Get } from '@nestjs/common';
import { AnimeService } from './anime.service';
import { Anime } from './anime.interface';

@Controller('anime')
export class AnimeController {
  constructor(private readonly animeService: AnimeService) { }
  
  @Get()
  findAll(): string {
    return 'This action returns all anime';
  }
}
