import { Injectable } from '@nestjs/common';
import { Agenda } from 'agenda';
import configuration from '../../config/config';

@Injectable()
export class AgendaConnectionService {
  private _agenda: Agenda;
  constructor() {
    this.init();
  }
  private init() {
    this._agenda = new Agenda({
      db: {
        address: configuration().dbs.scheduler.url,
      },
    });
  }

  public get agenda(): Agenda {
    return this._agenda;
  }
}
