import {
  Body,
  Controller,
  Delete,
  Get, HttpException, HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateDto, UpdateDto } from './dto';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../entities/employee.entity';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  getAllAction(): Promise<Employee[]> {
    return this.employeeService.findAll();
  }

  @Get(':id')
  async getOneAction(@Param('id') id: string): Promise<Employee> {
    const employee = this.employeeService.findOne(id);
    if (employee === undefined) {
      throw new HttpException(
        'Todo with id=' + id + ' not exists',
        HttpStatus.NOT_FOUND
      );
    }
    return employee;
  }

  @Post()
  createAction(@Body() createDto: CreateDto): Promise<Employee> {
    const employee = new Employee();
    employee.fullname = createDto.fullname;
    employee.position = createDto.position;
    employee.salary = createDto.salary;
    employee.status = createDto.status;
    employee.dataOfEntry = createDto.dataOfEntry;
    
    return this.employeeService.create(employee);
  }

  @Put(':id')
  async updateAction(
    @Param('id') id: string,
    @Body() {
      fullname, 
      position, 
      salary, 
      status, 
      dataOfEntry
    }: UpdateDto
  ): Promise<Employee> {
    const employee = await this.employeeService.findOne(id);
    if (employee === undefined) {
      throw new NotFoundException('Employee with id=' + id + ' not exists');
    }
    employee.fullname = fullname;
    employee.position = position;
    employee.salary = salary;
    employee.status = status;
    employee.dataOfEntry = dataOfEntry;
    return this.employeeService.update(employee);
  }

  @Delete(':id')
  deleteAction(@Param('id') id: string): Promise<void> {
    return this.employeeService.remove(id);
  }
}