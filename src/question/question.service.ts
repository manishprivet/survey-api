import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateQuestionDto,
  GetQuestionDto,
  UpdateQuestionDto,
} from './question.dto';
import { Question } from '../model/question.entity';
import { Answer } from '../model/answer.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private readonly repo: Repository<Question>,
    @InjectRepository(Answer)
    private readonly answerRepo: Repository<Answer>,
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

  public async get(question: GetQuestionDto) {
    const questionEntity = await this.repo.findOne({
      where: { id: question.id },
      select: ['title', 'id', 'created_at'],
    });
    if (!questionEntity)
      throw new HttpException('Question not found', HttpStatus.NOT_FOUND);

    const answers = await this.answerRepo.find({
      where: { question_id: question.id },
      select: ['id', 'answer', 'created_by', 'created_at'],
    });

    return { ...questionEntity, answers };
  }

  public async update(question: UpdateQuestionDto) {
    const q = await this.repo.findOne({ id: question.question_id });
    if (!q) throw new HttpException('Question Not Found', HttpStatus.NOT_FOUND);
    q.title = question.title;
    await this.repo.save(q);
    return q;
  }
}
