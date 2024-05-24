import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { PrismaService } from '../../src/prisma.service';

@Injectable()
export class TaskService {
    constructor(private readonly prismaService: PrismaService) {}

    async addTask(nom: string, user: [], priority: number): Promise<Task> {
            return this.prismaService.task.create({
                data: {
                    nom,
                    user,
                    priority
                },
            });
    }

    async getTaskByName(nom: string): Promise<Task> {
        return this.prismaService.task.findUnique({
            where: { nom }
        });
    }

    async getUserTasks(userId: number): Promise<Task[]> {
        return this.prismaService.task.findMany({
            where: { userId }
        })
    }

    async resetData(): Promise<void> {
        await this.prismaService.task.deleteMany();
    }
}
