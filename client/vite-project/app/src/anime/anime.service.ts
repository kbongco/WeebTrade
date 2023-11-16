import { Injectable } from '@nestjs/common';
import { CreateAnimeDto } from './dto/create-anime.dto';
import { UpdateAnimeDto } from './dto/update-anime.dto';
import { Anime } from './entities/anime.entity';

@Injectable()
export class AnimeService {
  private anime: Anime[] = []
  private idSeq = 0;

  create(createAnimeDto: CreateAnimeDto) {
    return 'This action adds a new anime';
  }

  findAll() {
    console.log(this.anime);
    return this.anime;
    // return 'we found our anime';
  }

  findOne(id: number) {
    return this.anime.find((animes) => animes.id === id);
  }

  update(id: number, updateAnimeDto: UpdateAnimeDto) {
    return `This action updates a #${id} anime`;
  }

  remove(id: number) {
    return `This action removes a #${id} anime`;
  }
}
