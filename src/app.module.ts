import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import configuration, { envFile } from './config/config';
import { ScheduleController } from './controllers/schedule/schedule.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: envFile(),
      load: [configuration],
    }),
  ],
  controllers: [ScheduleController],
  providers: [],
})
export class AppModule {}
