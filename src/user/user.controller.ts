import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegistrationReqModel } from './models/registration.req.model';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('registration')
  async registerUser(@Body() reg: RegistrationReqModel) {
    return await this.userService.registerUser(reg);
  }
}
