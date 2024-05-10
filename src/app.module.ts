import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { HealthRecordsModule } from './health-records/health-records.module';
import { ExerciseRecordsModule } from './exercise-records/exercise-records.module';

@Module({
  imports: [PrismaModule, UsersModule, AuthModule, HealthRecordsModule, ExerciseRecordsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
