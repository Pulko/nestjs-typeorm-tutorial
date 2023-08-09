import { Injectable } from '@nestjs/common';
import { Question } from '../entities/question.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsRelations, Repository } from 'typeorm';
import { CreateQuestionDto } from '../dto/create-question.dto';
import { Quiz } from '../entities/quiz.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,

    @InjectRepository(Quiz)
    private quizRepository: Repository<Quiz>,
  ) {}

  public async getQuestionById(
    id: number,
    relations?: string[],
  ): Promise<Question> {
    return await this.questionRepository.findOne({
      where: { id },
      relations: relations as FindOptionsRelations<Question>,
    });
  }

  public async createQuestion(
    data: CreateQuestionDto,
    { quiz }: { quiz: Quiz },
  ): Promise<Question> {
    const question = await this.questionRepository.save(data);

    quiz.questions.push(question);
    this.quizRepository.save(quiz);

    return question;
  }
}
