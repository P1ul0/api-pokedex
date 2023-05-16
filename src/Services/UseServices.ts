import { User } from '../Model/User';
import { UserRepository } from './../Repositories/UserRepository';



export class UserService {
    constructor(private userRepository: UserRepository = new UserRepository()){
        this.userRepository = userRepository;
    }

    createUser(user: User) {
        throw new Error('Method not implemented.');
    }

}