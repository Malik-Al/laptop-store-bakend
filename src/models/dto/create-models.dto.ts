import { ApiProperty } from "@nestjs/swagger";

export class CreateModelsDto {
  @ApiProperty({example: 'name', description: 'Название модели'})
  name: string;
}
