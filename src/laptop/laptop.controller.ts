import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UploadedFiles,
  Put,
  UseInterceptors, Query,
} from '@nestjs/common';
import { LaptopService } from './laptop.service';
import { CreateLaptopDto } from './dto/create-laptop.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { Laptop } from '../entity/laptop.entity';
import { Observable } from 'rxjs';
import { UpdateResult } from 'typeorm';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";



@ApiTags('Ноутбуки')
@Controller('/laptop')
export class LaptopController {
  constructor(private laptopService: LaptopService) {}

  @ApiOperation({summary: 'Получить все ноутбуков'})
  @ApiResponse({status: 200, type: [Laptop]})
  @Get()
  getAll() {
    return this.laptopService.laptopAll();
  }

  @ApiOperation({summary: 'Поиск ноутбука'})
  @ApiResponse({status: 200, type: Laptop})
  @Get('search')
  search(@Query('query') query: string){
    return this.laptopService.search(query)
  }


  @ApiOperation({summary: 'Создание ноутбука'})
  @ApiResponse({status: 201, type: Laptop})
  @Post(':id')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'picture', maxCount: 1 }]))
  create(@UploadedFiles() files, @Body() dto: CreateLaptopDto, @Param('id') id: string) {
    const { picture } = files;
    return this.laptopService.laptopCreate(dto,picture[0], id);
  }


  @ApiOperation({summary: 'Получить один ноутбук'})
  @ApiResponse({status: 200, type: Laptop})
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.laptopService.laptopOne(id);
  }

  @ApiOperation({summary: 'Удалить ноутбук'})
  @ApiResponse({status: 200, type: Laptop})
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.laptopService.laptopDelete(id);
  }


  @ApiOperation({summary: 'Обновить ноутбук'})
  @ApiResponse({status: 200, type: [Laptop]})
  @Put('update/:id')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'picture', maxCount: 1 }]))
  update(
    @UploadedFiles() files,
    @Param('id') id: string,
    @Body() laptop: Laptop,
  ): Observable<UpdateResult> {
    const { picture } = files;
    return this.laptopService.laptopUpdate(id, laptop, picture[0]);
  }

}
