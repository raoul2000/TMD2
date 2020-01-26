import { Test, TestingModule } from '@nestjs/testing';
import { LocalFsService } from './local-fs.service';

describe('LocalFsService', () => {
  let service: LocalFsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocalFsService],
    }).compile();

    service = module.get<LocalFsService>(LocalFsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
