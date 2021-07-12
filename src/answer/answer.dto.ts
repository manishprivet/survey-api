import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsString } from 'class-validator';

export class CreateAnswerDto {
  @IsUUID()
  @ApiProperty({
    example: 'bcae0bfc-e852-4b00-aa8c-bea5c517c0e7',
    description: 'Question ID',
  })
  question_id: string;

  @IsString()
  @ApiProperty({
    example: 'PostgreSQL',
    description: 'Answer of the question',
  })
  answer: string;
}
