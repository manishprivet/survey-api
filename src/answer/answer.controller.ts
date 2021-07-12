import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CreateAnswerDto } from './answer.dto';
import { AnswerService } from './answer.service';

@Controller('answer')
export class AnswerController {
  constructor(private serv: AnswerService) {}

  @Post('create')
  @ApiOperation({ summary: 'Create an Answer' })
  public async create(@Body() answer: CreateAnswerDto) {
    return await this.serv.create(answer);
  }
}
