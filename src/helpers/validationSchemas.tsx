import * as Yup from 'yup';
import { validationMessages } from 'assets/constans';

const { name, nationality, position, age, club, playerImage, email, password } = validationMessages;

export const AddPlayerSchema = Yup.object().shape({
  name: Yup.string().min(2, name.min).max(100, name.max).required(name.required),
  nationality: Yup.string().min(2, nationality.min).max(100, nationality.max).required(nationality.required),
  position: Yup.string().min(2, position.min).max(100, position.max).required(position.required),
  age: Yup.number().min(10, age.min).max(100, age.max).required(age.required),
  club: Yup.string().min(2, club.min).max(100, club.max).required(club.required),
  playerImage: Yup.string().min(2, playerImage.min).max(500, playerImage.max)
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string().min(2, email.min).max(100, email.max).required(email.required),
  password: Yup.string().min(2, password.min).max(25, password.max).required(password.required)
});

export const RegisterSchema = Yup.object().shape({
  email: Yup.string().min(2, email.min).max(100, email.max).required(email.required),
  password: Yup.string().min(2, password.min).max(25, password.max).required(password.required)
});
