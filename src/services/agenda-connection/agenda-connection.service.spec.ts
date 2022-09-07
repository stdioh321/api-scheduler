import { Test, TestingModule } from '@nestjs/testing';
import { AgendaConnectionService } from './agenda-connection.service';

describe('AgendaConnectionService', () => {
  let service: AgendaConnectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgendaConnectionService],
    }).compile();

    service = module.get<AgendaConnectionService>(AgendaConnectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
