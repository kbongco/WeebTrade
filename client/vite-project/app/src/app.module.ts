import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimeModule } from './anime/anime.module';
import { AnimeController } from './anime/anime.controller';
import { AnimeService } from './anime/anime.service';

@Module({
  imports: [AnimeModule],
  controllers: [AppController, AnimeController],
  providers: [AppService, AnimeService],
})
export class AppModule {}
