import { getRepository, Repository, Not } from 'typeorm';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import IFindProvidersDTO from '@modules/users/dtos/IFindProvidersDTO';

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

    public async findAllProviders({
        except_user_id,
    }: IFindProvidersDTO): Promise<User[]> {
        let users: User[];

        if (except_user_id) {
            users = await this.ormRepositorry.find({
                where: {
                    id: Not(except_user_id),
                },
            });
        } else {
            users = await this.ormRepositorry.find();
        }

        return users;
    }

    public async create(userData: ICreateUserDTO): Promise<User> {
        const user = this.ormRepositorry.create(userData);
        await this.ormRepositorry.save(user);

        return user;
    }

    public async save(user: User): Promise<User> {
        return this.ormRepositorry.save(user);
    }
}

export default UsersRepository;
