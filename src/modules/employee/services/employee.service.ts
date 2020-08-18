import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from '../entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  findOne(id: string): Promise<Employee> {
    return this.employeeRepository.findOne(id);
  }

  create(todo: Employee): Promise<Employee> {
    delete todo.id;
    return this.employeeRepository.save(todo);
  }

  update(todo: Employee): Promise<Employee> {
    return this.employeeRepository.save(todo);
  }

  async remove(id: string): Promise<void> {
    await this.employeeRepository.delete(id);
  }
}