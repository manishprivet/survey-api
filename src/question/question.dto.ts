import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';

export class CreateQuestionDto {
  @IsUUID()
  @ApiProperty({
    example: '1a6f8518-dec0-421b-a645-23c21ed66738',
    description: 'ID of the Survey',
  })
  survey_id: string;

  @IsString()
  @ApiProperty({
    example: 'What is your favourite Database?',
    description: 'Title of the Question',
  })
  readonly title: string;
}

export class UpdateQuestionDto {
  @IsUUID()
  @ApiProperty({
    example: '2d74e7e1-d1cb-4656-afc4-328301865a47',
    description: 'ID of the Question',
  })
  readonly question_id: string;

  @IsString()
  @ApiProperty({
    example: 'What is your favourite Database Engine?',
    description: 'New Title of the Question',
  })
  readonly title: string;
}
