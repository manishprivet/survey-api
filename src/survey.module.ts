import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnswerController } from './answer/answer.controller';
import { AnswerService } from './answer/answer.service';
import { Answer } from './model/answer.entity';
import { Question } from './model/question.entity';
import { Survey } from './model/survey.entity';
import { QuestionController } from './question/question.controller';
import { QuestionService } from './question/question.service';
import { SurveyController } from './survey/survey.controller';
import { SurveyService } from './survey/survey.service';

@Module({
  imports: [TypeOrmModule.forFeature([Survey, Question, Answer])],
  providers: [SurveyService, QuestionService, AnswerService],
  controllers: [SurveyController, QuestionController, AnswerController],
})
export class SurveyModule {}
