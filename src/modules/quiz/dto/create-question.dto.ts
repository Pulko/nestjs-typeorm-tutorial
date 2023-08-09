import { IsNotEmpty, IsString } from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty({ message: 'Question is required' })
  @IsString()
  question: string;

  @IsNotEmpty({ message: 'Quiz is required' })
  quizId: number;
}
