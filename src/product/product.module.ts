import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './schemas/product.entity';
import { FileService } from '../file/file.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product])], // add entity db typeorm
  providers: [ProductService, FileService],
  controllers: [ProductController],
})
export class ProductModule {}
