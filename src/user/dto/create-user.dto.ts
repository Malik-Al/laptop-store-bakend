import {IsEmail, IsString, Length} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({example: 'firstname', description: 'имя'})
  // @IsString({message: 'Должно быть строкой'})
  readonly firstname: string;

  @ApiProperty({example: 'lastname', description: 'фамилия'})
  // @IsString({message: 'Должно быть строкой'})
  readonly lastname: string;

  @ApiProperty({example: 'user@mail.ru', description: 'Почтовый адрес'})
  @IsString({message: 'Должно быть строкой'})
  @IsEmail({}, {message: 'Некорректный email'})
  readonly email: string;

  @ApiProperty({example: '123456789', description: 'Пароль'})
  @IsString({message: 'Должно быть строкой'})
  @Length(6,16,{message: 'Не меньше 6 и не больше 12'})
  readonly password: string;

  @ApiProperty({example: 'USER', description: 'Роль'})
  readonly roles: string
}
