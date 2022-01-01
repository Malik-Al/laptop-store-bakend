import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ProductModule} from "./product/product.module";
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from 'path';

@Module({
  imports: [
      ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static') }),
      TypeOrmModule.forRoot(),
      ProductModule
  ]
})
export class AppModule {}
