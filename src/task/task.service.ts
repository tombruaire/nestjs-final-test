import { Injectable, NotImplementedException } from '@nestjs/common';
import type { Task } from '@prisma/client';
import type { PrismaService } from 'src/prisma.service';

@Injectable()
export class TaskService {
    constructor(private readonly prismaService: PrismaService) {}

    async addTask(name: string, userId: string, priority: number): Promise<Task> {
        throw new NotImplementedException();
    }

    async getTaskByName(name: string): Promise<Task> {
        throw new NotImplementedException();
    }

    async getUserTasks(userId: string): Promise<Task[]> {
        throw new NotImplementedException();
    }

    async resetData(): Promise<void> {
        await this.prismaService.task.deleteMany();
    }
}
