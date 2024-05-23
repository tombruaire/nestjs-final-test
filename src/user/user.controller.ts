import { Controller, Get, Param, Post } from '@nestjs/common';
import type { UserService } from './user.service';
import type { User } from '@prisma/client';

@Controller('user/')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('add/:email')
    async addUser(@Param('email') email: string): Promise<User> {
        return this.userService.addUser(email);
    }
    
    @Get(':email')
    async getUser(
        @Param('email') email: string
    ): Promise<User> {
        return this.userService.getUser(email);
    }

    @Get('reset-data')
    async resetData(): Promise<User> {
        return this.userService.resetData();
    }
}
