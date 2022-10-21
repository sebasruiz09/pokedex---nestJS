import { HttpAdapter } from '../interfaces/htttp-adapter.interface';
import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class axiosAdapater implements HttpAdapter {
  constructor(private readonly httpService: HttpService) {}

  async get<T>(url: string): Promise<T> {
    try {
      const { data } = await this.httpService.axiosRef.get<T>(url);
      return data;
    } catch (error) {
      console.log(error);
      throw new BadRequestException();
    }
  }
}
