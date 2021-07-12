import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Answer } from '../model/answer.entity';
import { Repository } from 'typeorm';
import { CreateAnswerDto } from './answer.dto';

@Injectable()
export class AnswerService {
  constructor(
    @InjectRepository(Answer)
    private readonly repo: Repository<Answer>,
  ) {}

  public async create({ answer, question_id }: CreateAnswerDto) {
    try {
      const asnwer = this.repo.create({ answer, question_id });
      await this.repo.save(asnwer);
      return asnwer;
    } catch (err) {
      if (err.code === '23503')
        throw new HttpException('Invalid Question ID', HttpStatus.NOT_FOUND);
      throw new Error(err);
    }
  }
}
