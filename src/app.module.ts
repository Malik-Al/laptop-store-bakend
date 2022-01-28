import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LaptopModule } from './laptop/laptop.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { UsersModule } from './user/users.module';
import {AuthModule} from "./auth/auth.module";
import {ConfigModule} from "@nestjs/config";
import { ModelsModule } from './models/models.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static') }), // add static file
    TypeOrmModule.forRoot(), // add typeorm
    LaptopModule,
    UsersModule,
    AuthModule,
    ModelsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
