import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { UsersModule } from './user/users.module';
import {AuthModule} from "./auth/auth.module";
import {ConfigModule} from "@nestjs/config";
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static') }), // add static file
    TypeOrmModule.forRoot(), // add typeorm
    ProductModule,
    UsersModule,
    AuthModule,
    CategoryModule
  ],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class AppModule {}
