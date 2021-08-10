import React, { FC } from 'react';
import * as Yup from 'yup';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { Input } from 'components/atoms/Input/Input';
import { useAuth } from 'auth/AuthProvider';
import { StyledLoginForm } from './Signup.styles';
import { serverError, signupExistingAccount, signupSuccess, validationMessages } from 'assets/constans';
import { StyledParagraph } from 'views/Login/Login.styles';
import { RegisterSchema } from 'helpers/validationSchemas';

interface Signup {
  onSubmit?: Function;
}

const Signup: FC<Signup> = ({ onSubmit }) => {
  const { signUp } = useAuth();
  const handleSubmit = (values) => {
    const { email, password } = values;
    onSubmit ? onSubmit(values) : signUp(email, password, signupSuccess, serverError);
  };
  const initialValues = { email: '', password: '' };
  return (
    <StyledLoginForm title="Sing up">
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={RegisterSchema}>
        {({ touched, errors }) => (
          <Form>
            <Field as={Input} type="email" name="email" placeholder="Enter email" isRounded />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field as={Input} type="password" name="password" placeholder="Enter password" isRounded />
            {errors.password && touched.password ? <div>{errors.password}</div> : null}
            <StyledParagraph>
              {signupExistingAccount}
              <Link to="/login"> here</Link>.
            </StyledParagraph>
            <Button htmlType="submit" data-testid="sign-up">
              Sign up
            </Button>
          </Form>
        )}
      </Formik>
    </StyledLoginForm>
  );
};

export default Signup;
