import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import configuration, { envFile } from './config/config';
import { ScheduleController } from './controllers/schedule/schedule.controller';
import { ScheduleExecService } from './schedule-consumers/schedule-exec/schedule-exec.service';
import { AgendaConnectionService } from './services/agenda-connection/agenda-connection.service';
import { UtilsService } from './services/utils/utils.service';
import { ScheduleService } from './services/schedule/schedule.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [envFile(), '.env.development'],
      load: [configuration],
    }),
  ],
  controllers: [ScheduleController],
  providers: [
    ScheduleExecService,
    AgendaConnectionService,
    UtilsService,
    ScheduleService,
  ],
})
export class AppModule {}
