import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import {CreateUserDto} from "./dto/create-user.dto";


@Injectable()
export class UsersService {
  constructor(
      @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  // get one user register
  async createUser(dto: CreateUserDto): Promise<User>{
    const user = await this.userRepository.create(dto)
    return await this.userRepository.save(user)
  }

  // get one user
  async getUserByEmail(email: string){
    const user = await this.userRepository.findOne({ where: {email}})
    return user
  }

  // get all users
  async getUsersAll(): Promise<User[]> {
    const users = await this.userRepository.find();
    return users
  }

}
