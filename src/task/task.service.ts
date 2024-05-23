import { Injectable, NotImplementedException } from '@nestjs/common';
import type { Task } from '@prisma/client';

@Injectable()
export class TaskService {
    // constructor() {}

    addTask(name: string, userId: string, priority: number): Promise<Task> {
        throw new NotImplementedException();
    }

    getTaskByName(name: string): Promise<Task> {
        throw new NotImplementedException();
    }

    getUserTasks(userId: string): Promise<Task[]> {
        throw new NotImplementedException();
    }

    resetData(): Promise<Task> {
        throw new NotImplementedException();
    }
}
