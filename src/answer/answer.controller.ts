import { Body, Controller, Post, Headers } from '@nestjs/common';
import { ApiHeader, ApiOperation } from '@nestjs/swagger';
import { CreateAnswerDto } from './answer.dto';
import { AnswerService } from './answer.service';

@Controller('answer')
export class AnswerController {
  constructor(private serv: AnswerService) {}

  @Post('create')
  @ApiHeader({
    name: 'X-Username',
    description: 'Username of the user',
  })
  @ApiOperation({ summary: 'Create an Answer' })
  public async create(
    @Body() answer: CreateAnswerDto,
    @Headers('X-Username') username,
  ) {
    return await this.serv.create(answer, username);
  }
}
