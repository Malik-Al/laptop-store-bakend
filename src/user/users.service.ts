import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
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
    if(!user.firstname || !user.lastname){
      throw new HttpException('firstname и lastname Обязательны!', HttpStatus.BAD_REQUEST)
    }
    return await this.userRepository.save(user)
  }

  // get one user register
  async getUserByEmail(email: string){
    const user = await this.userRepository.findOne({ where: {email}})
    return user
  }

  // get one user login
  async loginGetUserByEmail(email: string){
    const user = await this.userRepository.findOne({ where: {email}})
    if(!user){
      throw new HttpException('Не корректный email', HttpStatus.BAD_REQUEST)
    }
    return user
  }

  // get all users
  async getUsersAll(): Promise<User[]> {
    const users = await this.userRepository.find();
    return users
  }

  // delete users request
  async getUserDelete(id: string) {
    const deleteUser = await this.userRepository.delete(id);
    return deleteUser.affected;
  }


}
