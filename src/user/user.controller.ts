import { Controller, Body, Get, Param, Post, ValidationPipe, ConflictException } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';
import { UserInterface } from './interfaces/user.interface';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async addUser(
        @Body(new ValidationPipe({ skipMissingProperties: true })) user: UserInterface
    ): Promise<User> {
        try {
            const email = user.email;
            return await this.userService.addUser(email);
        } catch (error) {
            if (error instanceof ConflictException) {
                throw new ConflictException('User already exists');
            }
            throw error;
        }
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
