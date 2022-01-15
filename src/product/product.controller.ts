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

@Controller('/product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  @UseInterceptors(FileFieldsInterceptor([{ name: 'picture', maxCount: 1 }]))
  create(@UploadedFiles() files, @Body() dto: CreateProductDto) {
    const { picture } = files;
    return this.productService.productCreate(dto, picture[0]);
  }

  @Get()
  getAll() {
    return this.productService.productAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.productService.productOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.productService.productDelete(id);
  }

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
