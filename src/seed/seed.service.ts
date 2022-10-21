import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { pokeResponse } from './interfaces/seed-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';

@Injectable()
export class SeedService {
  constructor(
    private readonly httpService: HttpService,
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
  ) {}

  async seedExecute() {
    await this.pokemonModel.deleteMany({}); // delete * fom not where
    const { data } = await this.httpService.axiosRef.get<pokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=500',
    );

    const allPokemon: { name: string; no: number }[] = [];

    data.results.forEach(async ({ name, url }) => {
      const no: number = +url.split('/')[6];
      await this.pokemonModel.create({ name, no });

      allPokemon.push({ name, no });
    });

    this.pokemonModel.insertMany(allPokemon);
    return 'seed execute sucessfully';
  }
}
