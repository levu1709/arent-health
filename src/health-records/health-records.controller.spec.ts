import { Test, TestingModule } from '@nestjs/testing';
import { HealthRecordsController } from './health-records.controller';

describe('HealthRecordsController', () => {
  let controller: HealthRecordsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthRecordsController],
    }).compile();

    controller = module.get<HealthRecordsController>(HealthRecordsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
