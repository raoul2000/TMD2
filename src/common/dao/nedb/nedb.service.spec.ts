import { Test, TestingModule } from '@nestjs/testing';
import { NedbService } from './nedb.service';

describe('NedbService', () => {
  let service: NedbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NedbService],
    }).compile();

    service = module.get<NedbService>(NedbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
