import { Module } from '@nestjs/common';
import { LaptopService } from './laptop.service';
import { LaptopController } from './laptop.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Laptop } from '../entity/laptop.entity';
import { FileService } from '../file/file.service';
import {Models} from "../entity/models.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Laptop, Models])], // add entity db typeorm
  providers: [LaptopService,FileService],
  controllers: [LaptopController],
})
export class LaptopModule {}
