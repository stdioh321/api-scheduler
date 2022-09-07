import { Injectable } from '@nestjs/common';
import { Agenda, Job } from 'agenda';
import configuration from '../../config/config';

@Injectable()
export class ScheduleExecService {
  private readonly agenda: Agenda;
  constructor() {
    this.agenda = new Agenda({
      db: {
        address: configuration().dbs.scheduler.url,
      },
    });
    this.init();
  }

  async init() {
    await this.agenda.start();
    this.agenda.define('abc', (job: Job) => {
      console.log({
        job: job.toJSON(),
      });
    });
  }
}
