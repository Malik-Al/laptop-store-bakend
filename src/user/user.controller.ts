import {Controller, Delete, Get, Param} from '@nestjs/common';
import {UsersService} from "./users.service";

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getAll() {
    return this.userService.getUsersAll();
  }


  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.userService.getUserDelete(id);
  }

}
