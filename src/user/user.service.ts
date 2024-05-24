import { Injectable, ConflictException } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '../../src/prisma.service';

@Injectable()
export class UserService {
    constructor(private readonly prismaService: PrismaService) {}

    async addUser(email: string): Promise<User> {
        const existingUser = await this.prismaService.user.findUnique({
            where: { email },
        });
    
        if (existingUser) {
            throw new ConflictException('User already exists');
        }
    
        return this.prismaService.user.create({
            data: { email },
        });
      }

    async getUser(email: string): Promise<User> {
        return this.prismaService.user.findUnique({ where: { email } });
    }

    async resetData(): Promise<void> {
        await this.prismaService.user.deleteMany();
    }
}
