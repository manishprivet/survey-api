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
    example: 'df4cebba-0d24-4654-bc0f-87e634f9e2ac',
    description: 'Survey UUID',
  })
  readonly id: string;
}
