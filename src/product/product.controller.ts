import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UploadedFiles,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { Product } from './schemas/product.entity';
import { Observable } from 'rxjs';
import { UpdateResult } from 'typeorm';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";


@ApiTags('Продукты')
@Controller('/product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @ApiOperation({summary: 'Создание продукта'})
  @ApiResponse({status: 201, type: Product})
  @Post()
  @UseInterceptors(FileFieldsInterceptor([{ name: 'picture', maxCount: 1 }]))
  create(@UploadedFiles() files, @Body() dto: CreateProductDto) {
    const { picture } = files;
    return this.productService.productCreate(dto, picture[0]);
  }


  @ApiOperation({summary: 'Получить все продукты'})
  @ApiResponse({status: 200, type: [Product]})
  @Get()
  getAll() {
    return this.productService.productAll();
  }

  @ApiOperation({summary: 'Получить один продукт'})
  @ApiResponse({status: 200, type: Product})
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.productService.productOne(id);
  }

  @ApiOperation({summary: 'Удалить продукт'})
  @ApiResponse({status: 200, type: Product})
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.productService.productDelete(id);
  }

  @ApiOperation({summary: 'Обновить продукты'})
  @ApiResponse({status: 200, type: [Product]})
  @Put('update/:id')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'picture', maxCount: 1 }]))
  update(
    @UploadedFiles() files,
    @Param('id') id: string,
    @Body() product: Product,
  ): Observable<UpdateResult> {
    const { picture } = files;
    return this.productService.productUpdate(id, product, picture[0]);
  }
}
