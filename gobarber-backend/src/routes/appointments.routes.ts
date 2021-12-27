// vendors
import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { parseISO } from 'date-fns';

// repositories
import AppointmentsRepository from '../repositories/AppointmentsRepository';

// services
import CreateAppointmentService from '../services/CreateAppointmentService';

// middlewares
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const appointmentsRouter = Router();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.get('/', async (request, response) => {
  console.log(request.user);
  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  const appointments = await appointmentsRepository.find();

  return response.json(appointments);
});

appointmentsRouter.post('/', async (request, response) => {
  const { provider_id, date } = request.body;

  const parsedDate = parseISO(date);

  const createdAppointment = new CreateAppointmentService();

  const appointment = await createdAppointment.execute({
    provider_id,
    date: parsedDate,
  });

  return response.json(appointment);
});
export default appointmentsRouter;
