import { Injectable, NotImplementedException } from '@nestjs/common';

@Injectable()
export class UserService {

    addUser(email: string): Promise<void> {
        throw new NotImplementedException();
    }

    getUser(email: string): Promise<unknown> {
        throw new NotImplementedException();
    }

    resetData(): Promise<void> {
        throw new NotImplementedException();
    }
}
