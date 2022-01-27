import {IsNumber, IsString} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateLaptopDto {
  @ApiProperty({example: 'name', description: 'Название ноутбука'})
  // @IsString({message: 'Должно быть строкой'})
  name: string;

  @ApiProperty({example: 'description', description: 'Описание ноутбука'})
  // @IsString({message: 'Должно быть строкой'})
  description: string;

  @ApiProperty({example: 'price', description: 'Цена ноутбука'})
  // @IsNumber({}, {message: 'Должно быть числом'})
  price: number;

  @ApiProperty({example: 'picture', description: 'Фото ноутбука'})
  // @IsString({message: 'Должно быть строкой'})
  picture: string;
}
