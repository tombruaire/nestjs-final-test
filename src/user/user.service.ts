import { Injectable, NotImplementedException } from '@nestjs/common';

@Injectable()
export class UserService {

    async addUser(email: string): Promise<void> {
        throw new NotImplementedException();
    }

    async getUser(email: string): Promise<unknown> {
        throw new NotImplementedException();
    }

    async resetData(): Promise<void> {
        throw new NotImplementedException();
    }
}
