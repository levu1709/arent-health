import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseRecordsController } from './exercise-records.controller';

describe('ExerciseRecordsController', () => {
  let controller: ExerciseRecordsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExerciseRecordsController],
    }).compile();

    controller = module.get<ExerciseRecordsController>(ExerciseRecordsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
