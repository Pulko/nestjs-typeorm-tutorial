import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateQuestionDto } from '../dto/create-question.dto';
import { QuestionService } from '../services/question.service';
import { Question } from '../entities/question.entity';
import { QuizService } from '../services/quiz.service';

@Controller('question')
export class QuestionController {
  constructor(
    private questionService: QuestionService,
    private quizService: QuizService,
  ) {}

  @Get(':id')
  @HttpCode(200)
  async getQuestionById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Question> {
    return this.questionService.getQuestionById(id, ['options', 'quiz']);
  }

  @Post('create')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async createQuestion(@Body() data: CreateQuestionDto): Promise<Question> {
    const { quizId } = data;

    const quiz = await this.quizService.getQuizById(quizId, ['questions']);

    if (!quiz) {
      throw new Error('Quiz not found');
    }

    return this.questionService.createQuestion(data, { quiz });
  }
}
