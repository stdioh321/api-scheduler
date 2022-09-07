import { Controller, Get } from '@nestjs/common';
import { Agenda } from 'agenda';
import configuration from '../../config/config';

@Controller('schedule')
export class ScheduleController {
  private readonly agenda: Agenda;
  constructor() {
    this.agenda = new Agenda({
      db: {
        address: configuration().dbs.scheduler.url,
      },
    });
  }
  @Get()
  get() {
    const t = new Date();
    t.setSeconds(t.getSeconds() + 20);
    this.agenda.schedule(t, 'abc', { to: 'email@teste.com' });
    return 'ok';
  }
}
