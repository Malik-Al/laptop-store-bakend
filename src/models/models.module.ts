import { Module } from '@nestjs/common';
import { ModelsService } from "./models.service";
import { ModelsController } from "./models.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Models } from "../entity/models.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Models])], // add entity db typeorm
  providers: [ModelsService],
  controllers: [ModelsController]
})
export class ModelsModule {}
