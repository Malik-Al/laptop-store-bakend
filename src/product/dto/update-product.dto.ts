import {IsNumber, IsString} from "class-validator";

export class UpdateProductDto {
  @IsString({message: 'Должно быть строкой'})
  id: string;

  @IsString({message: 'Должно быть строкой'})
  name: string;

  @IsString({message: 'Должно быть строкой'})
  description: string;

  @IsNumber({}, {message: 'Должно быть числом'})
  price: number;

  @IsString({message: 'Должно быть строкой'})
  picture: string;
}
