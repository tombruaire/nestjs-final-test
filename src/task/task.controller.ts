import { Controller, Get, Param, Post } from '@nestjs/common';
import type { TaskService } from './task.service';
import type { Task } from '@prisma/client';

@Controller('task/')
export class TaskController {
    constructor(private taskService: TaskService) {}

    @Post(':name/:user/:priority')
    addTask(
        @Param('name') name: string,
        @Param('user') user: string,
        @Param('priority') priority: number
    ): Promise<Task> {
        return this.taskService.addTask(name, user, priority);
    }

    @Get(':name')
    getTaskByName(
        @Param('name') name: string
    ): Promise<Task> {
        return this.taskService.getTaskByName(name);
    }

    @Get('userId')
    getUserTasks(
        @Param('userId') userId: string
    ): Promise<Task[]> {
        return this.taskService.getUserTasks(userId);
    }

    @Get('reset-data')
    resetData(): Promise<Task> {
        return this.taskService.resetData();
    }
}
