import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuestionDto, UpdateQuestionDto } from './question.dto';
import { Question } from '../model/question.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private readonly repo: Repository<Question>,
  ) {}

  public async create({ title, survey_id }: CreateQuestionDto) {
    try {
      const question = this.repo.create({ title, survey_id });
      await this.repo.save(question);
      return question;
    } catch (err) {
      if (err.code === '23503')
        throw new HttpException('Invalid Survey ID', HttpStatus.NOT_FOUND);
      throw new Error(err);
    }
  }

  public async update(question: UpdateQuestionDto) {
    const q = await this.repo.findOne({ id: question.question_id });
    if (!q) throw new HttpException('Question Not Found', HttpStatus.NOT_FOUND);
    q.title = question.title;
    await this.repo.save(q);
    return q;
  }
}
