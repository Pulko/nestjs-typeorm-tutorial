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
import { OptionService } from '../services/option.service';
import { QuestionService } from '../services/question.service';
import { CreateOptionDto } from '../dto/create-option.dto';

@Controller('question/option')
export class OptionController {
  constructor(
    private optionService: OptionService,
    private questionService: QuestionService,
  ) {}

  @Get(':id')
  @HttpCode(200)
  async getOptionById(@Param('id', ParseIntPipe) id: number) {
    return this.optionService.getOptionById(id, ['question']);
  }

  @Post()
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async createOptionToQuestion(@Body() data: CreateOptionDto) {
    const question = await this.questionService.getQuestionById(
      data.questionId,
      ['options'],
    );

    if (!question) {
      throw new Error('Question not found');
    }

    return this.optionService.createOption(data, question);
  }
}
