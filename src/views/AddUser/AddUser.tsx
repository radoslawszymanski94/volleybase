import React, { FC } from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import { Button } from 'antd';
import { Formik, Form, Field } from 'formik';
import { Input } from 'components/atoms/Input/Input';
import { StyledForm } from './AddUser.styles';
import { success, error } from 'helpers/messages';
import { addPlayerSuccess, serverError, validationMessages } from 'assets/constans';
import { baseURL } from 'api';
import UnauthenticatedApp from 'views/UnauthenticatedApp/UnauthenticatedApp';
import { useAuth } from 'auth/AuthProvider';

const { name, nationality, position, age, club, playerImage } = validationMessages;

const AddPlayerSchema = Yup.object().shape({
  name: Yup.string().min(2, name.min).max(100, name.max).required(name.required),
  nationality: Yup.string().min(2, nationality.min).max(100, nationality.max).required(nationality.required),
  position: Yup.string().min(2, position.min).max(100, position.max).required(position.required),
  age: Yup.number().min(10, age.min).max(100, age.max).required(age.required),
  club: Yup.string().min(2, club.min).max(100, club.max).required(club.required),
  playerImage: Yup.string().min(2, playerImage.min).max(1000, playerImage.max)
});

const AddUser: FC = () => {
  const { authenticated } = useAuth();
  return authenticated ? (
    <StyledForm title="Add player">
      <Formik
        initialValues={{
          name: '',
          nationality: '',
          position: '',
          age: 0,
          club: '',
          playerImage: ''
        }}
        onSubmit={(values, { resetForm }) => {
          axios
            .post(`${baseURL}players.json`, values)
            .then(() => resetForm({}))
            .then(() => success(addPlayerSuccess(values.name)))
            .catch(() => error(serverError));
        }}
        validationSchema={AddPlayerSchema}
      >
        {({ touched, errors }) => (
          <Form>
            <Field as={Input} type="text" name="name" placeholder="Enter player's name" isRounded />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <Field as={Input} type="text" name="nationality" placeholder="Enter player's nationality" isRounded />
            {errors.nationality && touched.nationality ? <div>{errors.nationality}</div> : null}
            <Field as={Input} type="text" name="position" placeholder="Enter player's position" isRounded />
            {errors.position && touched.position ? <div>{errors.position}</div> : null}
            <Field as={Input} type="number" name="age" isRounded />
            {errors.age && touched.age ? <div>{errors.age}</div> : null}
            <Field as={Input} type="text" name="club" placeholder="Enter player's club" isRounded />
            {errors.club && touched.club ? <div>{errors.club}</div> : null}
            <Field as={Input} type="text" name="playerImage" placeholder="Enter link to player's image" isRounded />
            {errors.playerImage && touched.playerImage ? <div>{errors.playerImage}</div> : null}
            <Button htmlType="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </StyledForm>
  ) : (
    <UnauthenticatedApp />
  );
};

export default AddUser;
