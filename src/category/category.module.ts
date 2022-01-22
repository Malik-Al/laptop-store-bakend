import { Module } from '@nestjs/common';
import { CategoryService } from "./category.service";
import { CategoryController } from "./category.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "./schemas/category.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Category])], // add entity db typeorm
  providers: [CategoryService],
  controllers: [CategoryController]
})
export class CategoryModule {}
