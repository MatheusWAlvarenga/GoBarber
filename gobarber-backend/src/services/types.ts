// models
import User from '../models/User';

// Types Create Appointment Service
export interface RequestAppointmentDTO {
  provider_id: string;
  date: Date;
}

// Types Create User Service
export interface RequestUserDTO {
  email: string;
  user_name: string;
  password: string;
  confirmPassword: string;
}

// Types Create Sessions Service
export interface RequestSessionsDTO {
  email: string;
  password: string;
}
export interface ResponseSessionsDTO {
  user: User;
  token: string;
}

// Types Update User Avatar Service
export interface RequestUserAvatarDTO {
  user_id: string;
  avatarFilename: string;
}
