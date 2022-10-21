import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { PokemonModule } from '../pokemon/pokemon.module';
import { HttpModule } from '@nestjs/axios';
import { CommonModule } from '../common/common.module';

@Module({
  imports: [PokemonModule, HttpModule, CommonModule],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
