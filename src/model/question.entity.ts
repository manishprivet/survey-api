import { Column, ManyToOne, JoinColumn, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Survey } from './survey.entity';

@Entity()
export class Question extends BaseEntity {
  @ManyToOne(() => Survey)
  @JoinColumn({ name: 'survey_id', referencedColumnName: 'id' })
  @Column()
  survey_id: Survey | string;

  @Column()
  title: string;
}
