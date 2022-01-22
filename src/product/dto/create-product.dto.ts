import {IsNumber, IsString} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
  @ApiProperty({example: 'name', description: 'Название продукта'})
  @IsString({message: 'Должно быть строкой'})
  name: string;

  @ApiProperty({example: 'description', description: 'Описание продукта'})
  @IsString({message: 'Должно быть строкой'})
  description: string;

  @ApiProperty({example: 'picture', description: 'Фото продукта'})
  @IsString({message: 'Должно быть строкой'})
  picture: string;

  @ApiProperty({example: 'price', description: 'Цена продукта'})
  @IsNumber({}, {message: 'Должно быть числом'})
  price: number;
}
