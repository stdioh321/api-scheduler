import { Controller, Get } from '@nestjs/common';

@Controller('schedule')
export class ScheduleController {
  @Get()
  get() {
    return 'ok';
  }
}
