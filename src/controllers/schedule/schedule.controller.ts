import { Body, Controller, Post } from '@nestjs/common';
import { Job } from 'agenda';
import ScheduelDto from 'src/dtos/schedule.dto';
import configuration from 'src/config/config';
import { ScheduleService } from 'src/services/schedule/schedule.service';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Post()
  async post(@Body() body: ScheduelDto) {
    const job: Job = await this.scheduleService.schedule(
      body.executionDatetime,
      configuration().agenda.name01,
      body,
    );
    return job.attrs._id;
  }
}
