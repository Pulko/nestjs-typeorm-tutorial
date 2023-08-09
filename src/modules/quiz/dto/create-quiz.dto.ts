import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateQuizDto {
  @IsNotEmpty({ message: 'Title is required' })
  @IsString()
  title: string;

  @IsNotEmpty({ message: 'Description is required' })
  @IsString()
  @Length(3, 255, { message: 'Description should be from 3 to 255 characters' })
  description: string;
}
