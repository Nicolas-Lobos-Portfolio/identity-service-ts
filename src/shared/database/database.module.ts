import { DataSource, DataSourceOptions } from 'typeorm';
import { DynamicModule, Module, Provider } from '@nestjs/common';

@Module({})
export class DatabaseModule {
  static forRootAsync(options: {
    name?: string;
    useFactory: (
      ...args: any[]
    ) => Promise<DataSourceOptions> | DataSourceOptions;
    inject?: any[];
  }): DynamicModule {
    const dataSourceToken = options.name || 'DEFAULT_DB_CONNECTION';

    const dataSourceProvider: Provider = {
      provide: dataSourceToken,
      useFactory: async (...args: any[]) => {
        const dataSourceOptions = await options.useFactory(...args);
        const dataSource = new DataSource(dataSourceOptions);
        return dataSource.initialize();
      },
      inject: options.inject || [],
    };

    return {
      module: DatabaseModule,
      providers: [dataSourceProvider],
      exports: [dataSourceProvider],
    };
  }
}
