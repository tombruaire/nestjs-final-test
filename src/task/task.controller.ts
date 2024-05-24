import { Controller, Get, Param, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from '@prisma/client';

@Controller('task/')
export class TaskController {
    constructor(private taskService: TaskService) {}

    @Post(':nom/:userId/:priority')
    async addTask(
        @Param('nom') nom: string,
        @Param('userId') userId: number,
        @Param('priority') priority: number
    ): Promise<Task> {
        return this.taskService.addTask(nom, userId, priority);
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
