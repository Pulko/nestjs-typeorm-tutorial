import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  //   port: parseInt(process.env.DB_PORT),
  port: 5434,
  //   username: process.env.DB_USERNAME,
  username: 'postgres',
  password: '123',
  database: 'nest',
  //   password: `${process.env.DB_PASSWORD}`,
  //   database: process.env.DB_NAME,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/db/migrations/*{.ts,.js}'],
};

export default new DataSource(dataSourceOptions);
