import { Module } from '@nestjs/common';
import { Employee } from './entities/employee.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeService } from './services/employee.service';
import { EmployeeController } from './controllers/employee.controller';


@Module({
  imports: [TypeOrmModule.forFeature([Employee])],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}