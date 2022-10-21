import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { pokeResponse } from './interfaces/seed-response.interface';
import { PokemonService } from '../pokemon/pokemon.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly pokemonSer: PokemonService,
    private readonly httpService: HttpService,
  ) {}

  async seedExecute() {
    const { data } = await this.httpService.axiosRef.get<pokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=10',
    );
    data.results.forEach((pokemon) => {
      const id: number = +pokemon.url.split('/')[6];
    });
  }
}
