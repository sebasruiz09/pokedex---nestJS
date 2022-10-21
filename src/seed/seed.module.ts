import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { PokemonModule } from '../pokemon/pokemon.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [PokemonModule, HttpModule],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
