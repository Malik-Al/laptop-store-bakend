import { Controller, Get, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Category } from "./schemas/category.entity";


@ApiTags('Категорий')
@Controller('category')
export class CategoryController {

  @ApiOperation({summary: 'Получить все категорий'})
  @ApiResponse({status: 200, type: [Category]})
  @Get()
  getAll(){
    return undefined
  }

  @ApiOperation({summary: 'Создание категорий'})
  @ApiResponse({status: 201, type: Category})
  @Post()
  create(){
    return undefined
  }
}
