import {Controller, Delete, Get, Param, Request, UseGuards} from '@nestjs/common';
import {UsersService} from "./users.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "../entity/users.entity";
import {JwtAuthGuard} from "./jwtAuth/JwtAuth.guard";
import {Roles} from "./roles/roles.decorator";
import {Role} from "./roles/role.enum";
import {RolesGuard} from "./roles/roles.guard";



@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}


  @ApiOperation({summary: 'Получить всех пользователей'})
  @ApiResponse({status: 200, type: [User]})
  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  getAll() {
    return this.userService.getUsersAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('check')
  getProfile(@Request() req){
    if(!req.user?.id){
      return {success: false}
    }
    return {success: true, userId: req.user.id}
  }

  @ApiOperation({summary: 'Удалить пользователя'})
  @ApiResponse({status: 200, type: User})
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.userService.getUserDelete(id);
  }


}
