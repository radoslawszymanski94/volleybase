import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import { StyledPlayerInfoCard } from 'components/organisms/Player/Player.styles';
import { Input } from 'components/atoms/Input/Input';
import { Button } from 'antd';
import { success, error } from 'helpers/messages';
import axios from 'axios';
import { baseURL } from 'api';
import * as Yup from 'yup';

const StyledForm = styled(StyledPlayerInfoCard)`
  display: block;
  width: 50%;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
  }

  input {
    margin: 20px 0;
  }

  button {
    background-color: ${({ theme }) => theme.colors.mint};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    outline: none;
    text-transform: uppercase;
    font-weight: 500;
    border-radius: 5px;
    margin: 20px 0;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.mintHover};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Name is too short!').max(100, 'Name is too long!').required('Player name is required'),
  nationality: Yup.string()
    .min(2, 'Nationality is too short!')
    .max(100, 'Nationality is too long!')
    .required('Nationality is required'),
  position: Yup.string()
    .min(2, 'Position name is too short!')
    .max(100, 'Position name is too long!')
    .required('Position is required'),
  age: Yup.number().min(10, 'Age is too small!').max(100, 'Age is too big!').required('Required'),
  club: Yup.string()
    .min(2, 'Name of the club is too short!')
    .max(100, 'Name of the club is too long!')
    .required('Required'),
  playerImage: Yup.string().min(2, 'Link is too short!').max(1000, 'Link is too long!')
});

const AddUser: React.FC = () => {
  return (
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
            .then(() => success(`Player ${values.name} added succesfully`))
            .then(() => resetForm({}));
        }}
        validationSchema={SignupSchema}
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
  );
};

export default AddUser;
