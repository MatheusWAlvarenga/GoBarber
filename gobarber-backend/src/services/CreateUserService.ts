// vendors
import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

// errors
import AppError from '../errors/AppErros';

// models
import User from '../models/User';

// types
import { RequestUserDTO } from './types';

class CreateUserService {
  public async execute({
    user_name,
    email,
    password,
    confirmPassword,
  }: RequestUserDTO): Promise<User> {
    const userRepository = getRepository(User);

    const findSameEmails = await userRepository.findOne({
      where: { email },
    });

    if (findSameEmails) {
      throw new AppError('This email already exists.', 400);
    }

    if (!(confirmPassword == password)) {
      throw new AppError('The password is not match', 400);
    }

    const hashPassword = await hash(password, 8);

    const user = userRepository.create({
      user_name,
      email,
      password: hashPassword,
    });

    await userRepository.save(user);

    return user;
  }
}

export default CreateUserService;
