// vendors
import { Router } from 'express';
import multer from 'multer';

// Service
import CreateUserService from '../services/CreateUserService';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

// middlewares
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

// configuration
import uploadCongfig from '../config/upload';

const usersRouter = Router();
const upload = multer(uploadCongfig);

usersRouter.post('/', async (request, response) => {
  const { user_name, email, password, confirmPassword } = request.body;

  const createdUser = new CreateUserService();

  const user = await createdUser.execute({
    user_name,
    email,
    password,
    confirmPassword,
  });

  delete user.password;

  return response.json(user);
});

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (request, response) => {
    const updateUserAvatar = new UpdateUserAvatarService();

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });

    return response.json(user);
  }
);
export default usersRouter;
