import { Test, TestingModule } from '@nestjs/testing';
import { ScheduleExecService } from './schedule-exec.service';

describe('ScheduleExecService', () => {
  let service: ScheduleExecService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScheduleExecService],
    }).compile();

    service = module.get<ScheduleExecService>(ScheduleExecService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
