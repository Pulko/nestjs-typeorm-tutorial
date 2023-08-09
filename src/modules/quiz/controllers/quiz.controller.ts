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
import { QuizService } from '../services/quiz.service';
import { CreateQuizDto } from '../dto/create-quiz.dto';
import { Quiz } from '../entities/quiz.entity';

@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}

  @Get()
  async getAllQuizes(): Promise<Quiz[]> {
    return this.quizService.getAllQuizes();
  }

  @Get(':id')
  async getQuizById(@Param('id', ParseIntPipe) id: number): Promise<Quiz> {
    return this.quizService.getQuizById(id, ['questions', 'questions.options']);
  }

  @Post('create')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() data: CreateQuizDto): Promise<Quiz> {
    return this.quizService.createQuiz(data);
  }
}
