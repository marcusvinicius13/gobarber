/* import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateProfileController from '@modules/users/services/UpdateProfileController';

export default class ProfileController {
    public async update(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const user_id = request.user.id;
        const { name, email, old_password, password } = request.body;

        const updateProfile = container.resolve(UpdateProfileController);

        const user = await updateProfile.execute({
            user_id,
            name,
            email,
            old_password,
            password,
        });

        const userWithoutPassword = {
            id: user.id,
            name: user.name,
            email: user.email,
            created_at: user.created_at,
            updated_at: user.updated_at,
        };

        return response.json(userWithoutPassword);
    }
} */
