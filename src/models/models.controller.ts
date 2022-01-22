import { Controller, Get, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Models } from "../entity/models.entity";


@ApiTags('Модели')
@Controller('models')
export class ModelsController {

  @ApiOperation({summary: 'Получить все модели'})
  @ApiResponse({status: 200, type: [Models]})
  @Get()
  getAll(){
    return undefined
  }

  @ApiOperation({summary: 'Создание модели'})
  @ApiResponse({status: 201, type: Models})
  @Post()
  create(){
    return undefined
  }
}
