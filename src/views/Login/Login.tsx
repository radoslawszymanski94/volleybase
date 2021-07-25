import React, { useContext } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import { StyledForm } from 'views/AddUser/AddUser.styles';
import { Input } from 'components/atoms/Input/Input';
import { Button } from 'antd';
import * as Yup from 'yup';
import { useAuth } from 'auth/AuthProvider';

export const StyledLoginForm = styled(StyledForm)`
  width: 40%;
`;

const LoginSchema = Yup.object().shape({
  email: Yup.string().min(2, 'Email is too short!').max(100, 'Email is too long!').required('Email is required'),
  password: Yup.string()
    .min(2, 'Password is too short!')
    .max(25, 'Password is too long!')
    .required('Password is required')
});

const Login: React.FC = () => {
  const { signIn } = useAuth();
  return (
    <StyledLoginForm title="Log in">
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={(values) => {
          const { email, password } = values;
          signIn(email, password);
        }}
        validationSchema={LoginSchema}
      >
        {({ touched, errors }) => (
          <Form>
            <Field as={Input} type="email" name="email" placeholder="Enter email" isRounded />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field as={Input} type="password" name="password" placeholder="Enter password" isRounded />
            {errors.password && touched.password ? <div>{errors.password}</div> : null}
            <Button htmlType="submit">Log in</Button>
          </Form>
        )}
      </Formik>
    </StyledLoginForm>
  );
};

export default Login;
