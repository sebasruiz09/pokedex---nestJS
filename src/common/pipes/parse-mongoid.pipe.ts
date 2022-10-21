import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
//pipe transform is a function that takes in a value and returns a transformed value
export class ParseMongoidPipe implements PipeTransform {
  // transform data before it is validated
  // eslint-disable-next-line
  transform(value: string, metadata: ArgumentMetadata) {
    //conditions to validate custom pipe
    if (!isValidObjectId(value))
      throw new BadRequestException('Invalid mongoID');
    return value;
  }
}
