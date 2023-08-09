import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Option } from '../entities/option.entity';
import { FindOptionsRelations, Repository } from 'typeorm';
import { CreateOptionDto } from '../dto/create-option.dto';
import { Question } from '../entities/question.entity';

@Injectable()
export class OptionService {
  constructor(
    @InjectRepository(Option)
    private optionRepository: Repository<Option>,
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
  ) {}

  public async getOptionById(
    id: number,
    relations?: string[],
  ): Promise<Option> {
    return await this.optionRepository.findOne({
      where: { id },
      relations: relations as FindOptionsRelations<Option>,
    });
  }

  public async createOption(
    data: CreateOptionDto,
    question: Question,
  ): Promise<any> {
    const option = await this.optionRepository.save(data);

    question.options.push(option);
    this.questionRepository.save(question);

    return option;
  }
}
