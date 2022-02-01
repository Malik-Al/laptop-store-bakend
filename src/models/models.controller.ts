import {Body, Controller, Delete, Get, Param, Post, Req} from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Models } from "../entity/models.entity";
import {ModelsService} from "./models.service";
import {CreateModelsDto} from "./dto/create-models.dto";




@ApiTags('Модели')
@Controller('models')
export class ModelsController {
  constructor(private modelsService: ModelsService) {}



  @ApiOperation({summary: 'Получить все модели'})
  @ApiResponse({status: 200, type: [Models]})
  @Get()
  getAll(){
    return this.modelsService.modelsAll()
  }

  @ApiOperation({summary: 'Создание модели'})
  @ApiResponse({status: 201, type: Models})
  @Post()
  create(@Body() dto: CreateModelsDto){
    return this.modelsService.modelCreate(dto)
  }

  @ApiOperation({summary: 'Удалить модели'})
  @ApiResponse({status: 200, type: Models})
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.modelsService.modelDelete(id);
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.modelsService.modelOne(id);
  }
}
