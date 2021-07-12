import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Survey } from '../model/survey.entity';
import { getManager, Repository } from 'typeorm';
import { CreateSurveyDto, GetSurveyDto } from './survey.dto';
import { QuestionService } from '../question/question.service';
import { Answer } from '../model/answer.entity';
import { Question } from '../model/question.entity';

@Injectable()
export class SurveyService {
  constructor(
    @InjectRepository(Survey)
    private readonly repo: Repository<Survey>,
    @InjectRepository(Question)
    private readonly questionRepo: Repository<Question>,
    private questionService: QuestionService,
  ) {}

  public async create({ name, questions }: CreateSurveyDto) {
    const survey = this.repo.create({ name });
    await this.repo.save(survey);

    questions.forEach(async (question) => {
      question.survey_id = survey.id;
      await this.questionService.create(question);
    });
    return survey;
  }

  public async get(survey: GetSurveyDto) {
    const surveyEntity = await this.repo.findOne({ id: survey.id });
    if (!surveyEntity)
      throw new HttpException('Survey not found', HttpStatus.NOT_FOUND);
    const answerData = await getManager()
      .createQueryBuilder(Question, 'ques')
      .select(
        'ques.id as question_id, ques.title as question, ans.created_at as answer_date, ans.answer as answer',
      )
      .innerJoin(Answer, 'ans', 'ques.id = ans.question_id')
      .where(`ques.survey_id = :id`, { id: survey.id })
      .getRawMany();

    const questions = await this.questionRepo.find({
      where: { survey_id: survey.id },
      select: ['id', 'title'],
    });

    const data = { id: survey.id, name: surveyEntity.name, questions: [] };

    questions.forEach((question) =>
      data.questions.push({
        id: question.id,
        title: question.title,
        answers: [],
      }),
    );

    answerData.forEach((answer) => {
      data.questions
        .find((q) => q.id === answer.question_id)
        .answers.push(answer.answer);
    });

    return data;
  }
}
