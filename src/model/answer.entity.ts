import { Column, ManyToOne, JoinColumn, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Question } from './question.entity';

@Entity()
export class Answer extends BaseEntity {
  @ManyToOne(() => Question)
  @JoinColumn({ name: 'question_id', referencedColumnName: 'id' })
  @Column()
  question_id: Question | string;

  @Column()
  answer: string;

  @Column()
  created_by: string;
}
