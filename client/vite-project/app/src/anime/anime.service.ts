import { Get, Injectable } from '@nestjs/common';
import { Anime } from './anime.interface';

@Injectable()
export class AnimeService {
  private anime: Array<Anime> = [];

  getAllAnime(): Anime[] {
    return this.anime;
  }
}
