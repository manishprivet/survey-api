import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsString, ArrayMaxSize, IsArray } from 'class-validator';
import { CreateQuestionDto } from '../question/question.dto';
import { Type } from 'class-transformer';

export class CreateSurveyDto {
  @IsString()
  @ApiProperty({ example: 'Sample Survey', description: 'Name of the Survey' })
  readonly name: string;

  @IsArray()
  @Type(() => CreateQuestionDto)
  @ArrayMaxSize(10)
  @ApiProperty({
    example: [
      { title: 'What is your favourite Database?' },
      { title: 'What is your favourite Food?' },
    ],
    description: 'Array of Questions',
  })
  questions: CreateQuestionDto[];
}

export class GetSurveyDto {
  @IsUUID()
  @ApiProperty({
    example: '4af0062b-f78b-430f-9211-b1d2be10dc0d',
    description: 'Survey UUID',
  })
  readonly id: string;
}
