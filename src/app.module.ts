import { Module } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import configuration, { envFile } from './config/config';
import { typeormConfig } from './infra/db/typeorm-mongo.config';

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
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync(typeormConfig),
    HttpModule,
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
