import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { UsersModule } from './user/users.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static') }), // add static file
    TypeOrmModule.forRoot(), // add typeorm
    ProductModule,
    UsersModule,
  ],
})
export class AppModule {}
