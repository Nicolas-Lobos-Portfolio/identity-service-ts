import { DataSource } from 'typeorm';
export const MySqlServerDataSourceProvide = 'mysqlServerProvide';

export const sqlServerDatabaseProviders = [
  {
    provide: MySqlServerDataSourceProvide,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.DATABASE_HOST,
        port: +process.env.DATABASE_PORT || 1433,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
        entities: [__dirname + '/../../**/**/**/**/*.entity{.ts,.js}'],
      });

      return dataSource.initialize();
    },
  },
];
