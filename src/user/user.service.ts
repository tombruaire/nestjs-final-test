import { Injectable } from '@nestjs/common';
import type { User } from '@prisma/client';
import type { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
    constructor(private readonly prismaService: PrismaService) {}

    async addUser(email: string): Promise<User> {
        const userExist = await this.getUser(email);
        if (userExist) {
            throw new Error("Utilisateur déjà existant !");
        }
        return this.prismaService.user.create({ data: { email } });
    }

    async getUser(email: string): Promise<User> {
        return this.prismaService.user.findUnique({ where: { email } });
    }

    async resetData(): Promise<void> {
        await this.prismaService.user.deleteMany();
    }
}
