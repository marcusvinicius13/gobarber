import { getRepository, Repository } from 'typeorm';

import IUsersTokensRepository from '@modules/users/repositories/IUserTokensRepository';

import UserToken from '../entities/UserToken';

class UsersTokenRepository implements IUsersTokensRepository {
    private ormRepositorry: Repository<UserToken>;

    constructor() {
        this.ormRepositorry = getRepository(UserToken);
    }

    public async findByToken(token: string): Promise<UserToken | undefined> {
        const userToken = await this.ormRepositorry.findOne({
            where: { token },
        });

        return userToken;
    }

    public async generate(user_id: string): Promise<UserToken> {
        const userToken = this.ormRepositorry.create({
            user_id,
        });

        await this.ormRepositorry.save(userToken);
        return userToken;
    }
}

export default UsersTokenRepository;
