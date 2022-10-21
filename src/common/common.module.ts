import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { axiosAdapater } from './adapter/axios.adapter';

@Module({
  providers: [axiosAdapater],
  imports: [HttpModule],
  exports: [axiosAdapater],
})
export class CommonModule {}
