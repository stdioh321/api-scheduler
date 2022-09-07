import { Injectable } from '@nestjs/common';
import { Job } from 'agenda';
import { AgendaConnectionService } from '../agenda-connection/agenda-connection.service';

@Injectable()
export class ScheduleService {
  constructor(private readonly agendaService: AgendaConnectionService) {}

  async schedule(executionDate: Date, name: string, body: any) {
    const job: Job = await this.agendaService.agenda.schedule(
      executionDate,
      name,
      body,
    );
    return job;
  }
}
