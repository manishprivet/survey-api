import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import options from './config/typeorm';
import { SurveyModule } from './survey.module';

@Module({
  imports: [TypeOrmModule.forRoot(options), SurveyModule],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
