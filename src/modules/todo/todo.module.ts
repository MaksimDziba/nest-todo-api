import { Module } from '@nestjs/common';
import { Todo } from './entities/todo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoService } from './services/todo.service';
import { TodoController } from './controllers/todo.controller';


@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}