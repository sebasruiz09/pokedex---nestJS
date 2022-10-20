import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
//considere this class as mongo document
@Schema()
export class Pokemon extends Document {
  @Prop({
    unique: true,
    index: true,
  })
  name: string;

  @Prop({
    unique: true,
    index: true,
  })
  no: number;
}

export const pokemonSchema = SchemaFactory.createForClass(Pokemon);
