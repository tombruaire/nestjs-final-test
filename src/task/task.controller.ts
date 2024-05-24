import { Body, Controller, Get, Param, Post, ValidationPipe } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from '@prisma/client';
import { TaskInterface } from './interfaces/task.interface';

@Controller()
export class TaskController {
    constructor(private taskService: TaskService) {}

    @Post()
    async addTask(
        @Body(new ValidationPipe({ skipMissingProperties: true })) task: TaskInterface
    ): Promise<Task> {
        const { nom, user, priority } = task;
        return await this.taskService.addTask(nom, user, priority);
    }

    @Get(':nom')
    async getTaskByName(
        @Param('nom') nom: string
    ): Promise<Task> {
        return this.taskService.getTaskByName(nom);
    }

    @Get('userId')
    async getUserTasks(
        @Param('userId') userId: number
    ): Promise<Task[]> {
        return this.taskService.getUserTasks(userId);
    }

    @Get('reset-data')
    async resetData(): Promise<void> {
        return this.taskService.resetData();
    }
}
