import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateSurveyDto, GetSurveyDto } from './survey.dto';
import { SurveyService } from './survey.service';

@Controller('survey')
export class SurveyController {
  constructor(private serv: SurveyService) {}

  @Post('create')
  @ApiOperation({ summary: 'Create a Survey' })
  @ApiResponse({ status: 200, description: 'Survey Created' })
  public async create(@Body() survey: CreateSurveyDto) {
    const createdSurvey = await this.serv.create(survey);
    return createdSurvey;
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get a Survey' })
  @ApiResponse({ status: 200, description: 'Survey Found' })
  public async get(@Param() survey: GetSurveyDto) {
    const createdSurvey = await this.serv.get(survey);
    return createdSurvey;
  }
}
