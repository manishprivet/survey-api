import {
  Body,
  Controller,
  Get,
  Headers,
  Param,
  ParseBoolPipe,
  Post,
  Query,
} from '@nestjs/common';
import { ApiHeader, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { CreateSurveyDto, GetSurveyDto } from './survey.dto';
import { SurveyService } from './survey.service';

@Controller('survey')
export class SurveyController {
  constructor(private serv: SurveyService) {}

  @Post('create')
  @ApiOperation({ summary: 'Create a Survey' })
  @ApiHeader({
    name: 'X-Username',
    description: 'Username of the user',
  })
  public async create(
    @Body() survey: CreateSurveyDto,
    @Headers('X-Username') username: string,
  ) {
    const createdSurvey = await this.serv.create(survey, username);
    return createdSurvey;
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get a Survey' })
  @ApiQuery({ name: 'withAnswers', description: 'Get Survey with Answers' })
  public async get(
    @Param() survey: GetSurveyDto,
    @Query('withAnswers', ParseBoolPipe) withAnswers: boolean,
  ) {
    const createdSurvey = await this.serv.get(survey, withAnswers);
    return createdSurvey;
  }
}
