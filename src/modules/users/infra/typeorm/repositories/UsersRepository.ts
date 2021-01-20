import { getRepository, Repository } from 'typeorm';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

import User from '../entities/User';

class UsersRepository implements IUsersRepository {
    private ormRepositorry: Repository<User>;

    constructor() {
        this.ormRepositorry = getRepository(User);
    }

    public async findById(id: string): Promise<User | undefined> {
        const user = await this.ormRepositorry.findOne(id);
        return user;
    }

    public async findByEmail(email: string): Promise<User | undefined> {
        const user = await this.ormRepositorry.findOne({
            where: { email },
        });
        return user;
    }

    public async create(userData: ICreateUserDTO): Promise<User> {
        const appointment = this.ormRepositorry.create(userData);
        await this.ormRepositorry.save(appointment);

        return appointment;
    }

    public async save(user: User): Promise<User> {
        return this.ormRepositorry.save(user);
    }
}

export default UsersRepository;
