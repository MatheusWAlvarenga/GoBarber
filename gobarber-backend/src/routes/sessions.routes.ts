// vendors
import { Router } from 'express';

// Service
import CreateSessionsService from '../services/CreateSessionsService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const sessionUser = new CreateSessionsService();

  const { user, token } = await sessionUser.execute({
    email,
    password,
  });

  delete user.password;

  return response.json({ user, token });
});
export default sessionsRouter;
