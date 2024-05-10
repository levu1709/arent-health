import { Module } from '@nestjs/common';
import { ExerciseRecordsService } from './exercise-records.service';
import { ExerciseRecordsController } from './exercise-records.controller';

@Module({
  providers: [ExerciseRecordsService],
  controllers: [ExerciseRecordsController]
})
export class ExerciseRecordsModule {}
