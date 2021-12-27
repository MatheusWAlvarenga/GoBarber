// vendors
import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';

// config
import uploadCongfig from '../config/upload';

// errors
import AppError from '../errors/AppErros';

// model
import User from '../models/User';

// types
import { RequestUserAvatarDTO } from './types';

class UpdateUserAvatarService {
  public async execute({
    user_id,
    avatarFilename,
  }: RequestUserAvatarDTO): Promise<User> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(user_id);

    if (!user) {
      throw new AppError('Only authenticaded users can change avatar.', 401);
    }

    if (user.avatar) {
      const userAvatarFilePath = path.join(
        uploadCongfig.directory,
        user.avatar
      );
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    user.avatar = avatarFilename;

    await usersRepository.save(user);

    delete user.password;

    return user;
  }
}

export default UpdateUserAvatarService;
