import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {
  @ApiProperty({example: 'name', description: 'Название категорий'})
  name: string;
}
