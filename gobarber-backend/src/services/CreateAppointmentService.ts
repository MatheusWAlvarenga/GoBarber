// vendors
import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';

// errors
import AppError from '../errors/AppErros';

// models
import Appointment from '../models/Appointment';

// repositories
import AppointmentsRepository from '../repositories/AppointmentsRepository';

// types
import { RequestAppointmentDTO } from './types';

class CreateAppointmentService {
  public async execute({
    provider_id,
    date,
  }: RequestAppointmentDTO): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = await appointmentsRepository.findByDate(
      appointmentDate
    );

    if (findAppointmentInSameDate) {
      throw new AppError('This appointment is already booked.', 400);
    }

    const appointment = appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    });

    await appointmentsRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
