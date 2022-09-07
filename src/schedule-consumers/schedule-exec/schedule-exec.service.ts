import { Injectable } from '@nestjs/common';
import { Job } from 'agenda';
import ScheduelDto from 'src/dtos/forms/schedule.form';
import configuration from 'src/config/config';
import { AgendaConnectionService } from '../../services/agenda-connection/agenda-connection.service';

@Injectable()
export class ScheduleExecService {
  constructor(private readonly agendaService: AgendaConnectionService) {
    this.init();
  }

  async init(): Promise<void> {
    await this.startProcessingAgenda();
    this.agendaService.agenda.define(
      configuration().agenda.name01,
      this.handleJob,
    );
  }

  startProcessingAgenda(): Promise<unknown> {
    return this.agendaService.agenda.start();
  }

  handleJob(job: Job): void {
    const data = job.attrs.data as ScheduelDto;
    console.log({ data });
  }
}
