import React, { FC } from 'react';
import { Button } from 'antd';
import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import { Input } from 'components/atoms/Input/Input';
import { useAuth } from 'auth/AuthProvider';
import { StyledLoginForm, StyledParagraph } from './Login.styles';
import { loginNoAccount, loginSuccess, serverError } from 'assets/constans';
import { LoginSchema } from 'helpers/validationSchemas';

interface LoginProps {
  onSubmit?: Function;
}

const Login: FC<LoginProps> = ({ onSubmit }) => {
  const { signIn } = useAuth();
  const handleSubmit = (values) => {
    const { email, password } = values;
    onSubmit ? onSubmit(values) : signIn(email, password, loginSuccess, serverError);
  };
  const initialValues = { email: '', password: '' };
  return (
    <StyledLoginForm title="Log in">
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={LoginSchema}>
        {({ touched, errors }) => (
          <Form>
            <Field as={Input} type="email" name="email" placeholder="Enter email" isRounded />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field as={Input} type="password" name="password" placeholder="Enter password" isRounded />
            {errors.password && touched.password ? <div>{errors.password}</div> : null}
            <StyledParagraph>
              {loginNoAccount}
              <Link to="/signup"> here</Link>.
            </StyledParagraph>
            <Button htmlType="submit" data-testid="sign-in">
              Sign in
            </Button>
          </Form>
        )}
      </Formik>
    </StyledLoginForm>
  );
};

export default Login;
