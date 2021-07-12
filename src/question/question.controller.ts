import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import {
  CreateQuestionDto,
  GetQuestionDto,
  UpdateQuestionDto,
} from './question.dto';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
  constructor(private serv: QuestionService) {}

  @Get('/:id')
  @ApiOperation({ summary: 'Get question' })
  public async get(@Param() question: GetQuestionDto) {
    return await this.serv.get(question);
  }

  @Post('create')
  @ApiOperation({ summary: 'Create a Question' })
  public async create(@Body() question: CreateQuestionDto) {
    return await this.serv.create(question);
  }

  @Put('update')
  @ApiOperation({ summary: 'Update a Question' })
  public async update(@Body() question: UpdateQuestionDto) {
    return await this.serv.update(question);
  }
}
