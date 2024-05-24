import { Controller, Body, Get, Param, Post, ValidationPipe } from '@nestjs/common';
import type { UserService } from './user.service';
import type { User } from '@prisma/client';
import type { UserInterface } from './interfaces/user.interface';

@Controller('user/')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('add')
    async addUser(
        @Body(new ValidationPipe({ skipMissingProperties: true })) user: UserInterface
    ): Promise<User> {
        const email = user.email;
        return this.userService.addUser(email);
    }
    
    @Get(':email')
    async getUser(
        @Param('email') email: string
    ): Promise<User> {
        return this.userService.getUser(email);
    }

    @Get('reset-data')
    async resetData(): Promise<void> {
        return this.userService.resetData();
    }
}
