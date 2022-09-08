import { Body, Controller, Post } from '@nestjs/common';
import { Job } from 'agenda';
import ScheduelForm from 'src/dtos/forms/schedule.form';
import { ScheduleService } from 'src/services/schedule/schedule.service';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';

@Controller('schedule')
export class ScheduleController {
  private readonly agendaName: string;
  constructor(
    private readonly scheduleService: ScheduleService,
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {
    this.agendaName = this.configService.get('agenda.name01');
  }

  @Post()
  async post(@Body() body: ScheduelForm) {
    const job: Job = await this.scheduleService.schedule(
      body.executionDatetime,
      this.agendaName,
      body,
    );
    return job.attrs._id;
  }
}
