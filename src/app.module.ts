import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import configuration, { envFile } from './config/config';
import { ScheduleController } from './controllers/schedule/schedule.controller';
import { ScheduleExecService } from './services/schedule-exec/schedule-exec.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [envFile(), '.env.development'],
      load: [configuration],
    }),
  ],
  controllers: [ScheduleController],
  providers: [ScheduleExecService],
})
export class AppModule {}
