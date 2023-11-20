// anime.repository.ts
import {  DataSource, Repository } from 'typeorm';
import { Anime } from './entities/anime.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AnimeRepository extends Repository<Anime> {
  constructor(private dataSource: DataSource) {
    super(AnimeRepository, dataSource.createEntityManager());
  }
  // Custom repository methods can be added here
  // For example, you might have methods for querying the database related to Anime entities
}
