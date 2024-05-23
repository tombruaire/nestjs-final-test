import { Injectable, NotImplementedException } from '@nestjs/common';
import type { Task } from '@prisma/client';

@Injectable()
export class TaskService {
    // constructor() {}

    async addTask(name: string, userId: string, priority: number): Promise<Task> {
        throw new NotImplementedException();
    }

    async getTaskByName(name: string): Promise<Task> {
        throw new NotImplementedException();
    }

    async getUserTasks(userId: string): Promise<Task[]> {
        throw new NotImplementedException();
    }

    async resetData(): Promise<Task> {
        throw new NotImplementedException();
    }
}
