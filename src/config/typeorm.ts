import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const { POSTGRES_URL, SYNCHRONIZE_DB } = process.env;

const options: TypeOrmModuleOptions = {
  type: 'postgres',
  url: POSTGRES_URL,
  autoLoadEntities: true,
  synchronize: Boolean(SYNCHRONIZE_DB),
  logging: process.env.NODE_ENV !== 'production',
  entities: ['**/*.entity{.ts,.js}'],
};

export default options;
