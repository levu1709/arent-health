import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseRecordsService } from './exercise-records.service';

describe('ExerciseRecordsService', () => {
  let service: ExerciseRecordsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExerciseRecordsService],
    }).compile();

    service = module.get<ExerciseRecordsService>(ExerciseRecordsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
