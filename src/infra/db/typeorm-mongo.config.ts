import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { join } from 'path';
import configuration from 'src/config/config';

const typeormConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: () => {
    return {
      type: 'mongodb',
      url: configuration().dbs.scheduler.url,
      entities: [join(__dirname, '../../models/**.entity{.ts,.js}')],
      synchronize: true,
      useNewUrlParser: true,
      logging: true,
    };
  },
  inject: [ConfigService],
};

export { typeormConfig };
