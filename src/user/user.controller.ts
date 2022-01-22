import {Controller, Delete, Get, Param} from '@nestjs/common';
import {UsersService} from "./users.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./users.entity";


@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}


  @ApiOperation({summary: 'Получить всех пользователей'})
  @ApiResponse({status: 200, type: [User]})
  @Get()
  getAll() {
    return this.userService.getUsersAll();
  }

  @ApiOperation({summary: 'Удалить пользователя'})
  @ApiResponse({status: 200, type: User})
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.userService.getUserDelete(id);
  }

}
