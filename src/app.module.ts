import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';

import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [
    //yarn add @nestjs/serve-static
    // to render static file in the browser
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),

    //create reference to database
    MongooseModule.forRoot('mongodb://localhost/pokemon'),
    // import modules
    PokemonModule,
  ],
})
export class AppModule {}
