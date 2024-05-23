import { Controller, Get, Param, Post } from '@nestjs/common';
import type { UserService } from './user.service';

@Controller('user/')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('add/:email')
    async addUser(@Param('email') email: string): Promise<void> {
        return this.userService.addUser(email);
    }
    
    @Get(':email')
    async getUser(
        @Param('email') email: string
    ): Promise<unknown> {
        return this.userService.getUser(email);
    }

    @Get('reset-data')
    async resetData(): Promise<void> {
        return this.userService.resetData();
    }
}
