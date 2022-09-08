import { Injectable } from '@nestjs/common';

import { Job } from 'agenda';
import ScheduelDto from 'src/dtos/forms/schedule.form';
import configuration from 'src/config/config';
import { AgendaConnectionService } from '../../services/agenda-connection/agenda-connection.service';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class ScheduleExecService {
  constructor(
    private readonly agendaService: AgendaConnectionService,
    private readonly httpService: HttpService,
  ) {
    this.init();
  }

  async init(): Promise<void> {
    await this.startProcessingAgenda();
    this.agendaService.agenda.define(
      configuration().agenda.name01,
      this.handleJob.bind(this),
    );
  }

  startProcessingAgenda(): Promise<unknown> {
    return this.agendaService.agenda.start();
  }

  async handleJob(job: Job): Promise<void> {
    const data = job.attrs.data as ScheduelDto;
    console.log({
      data,
    });

    try {
      const res = await firstValueFrom(
        this.httpService.request({
          method: data.method,
          url: data.url,
          headers: JSON.parse(data.headers || null),
          data: JSON.parse(data.body || null),
        }),
      );
      console.log(res.data);
    } catch (error) {
      console.log({ error });
    }
  }
}
