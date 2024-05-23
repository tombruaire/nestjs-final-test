import { Injectable, NotImplementedException } from '@nestjs/common';
import type { User } from '@prisma/client';

@Injectable()
export class UserService {

    async addUser(email: string): Promise<User> {
        throw new NotImplementedException();
    }

    async getUser(email: string): Promise<User> {
        throw new NotImplementedException();
    }

    async resetData(): Promise<User> {
        throw new NotImplementedException();
    }
}
