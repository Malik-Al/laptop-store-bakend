import {IsNumber, IsString} from "class-validator";

export class CreateProductDto {
  @IsString({message: 'Должно быть строкой'})
  name: string;

  @IsString({message: 'Должно быть строкой'})
  description: string;

  @IsNumber({}, {message: 'Должно быть числом'})
  price: number;
}
