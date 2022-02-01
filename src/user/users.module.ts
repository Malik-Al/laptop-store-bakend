import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {User} from "../entity/users.entity";
import {JwtAuthGuard} from "./jwtAuth/JwtAuth.guard";
import {JwtModule} from "@nestjs/jwt";

@Module({
  imports: [
      TypeOrmModule.forFeature([User]),
      JwtModule.register({
        secret: process.env.PRIVATE_KEY || 'SECRET',
        signOptions: { expiresIn: '2h' },
      })
  ],
  providers: [UsersService,JwtAuthGuard],
  controllers: [UsersController],
  exports: [UsersService, JwtModule]
})
export class UsersModule {}
