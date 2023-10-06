import { Fragment } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import Link from 'components/common/Link/Link';
import { SignBtn, GoogleBtn } from './AuthBtns/AuthBtns';
import { loginThunk } from 'store/auth/authOperations';
import { Form, Field, Label } from 'components/AuthForms/AuthForms.styled';
import { ErrorMessage, Div } from 'components/AuthForms/AuthForms.styled';
import { signinSchema } from 'utils/validation';

const initialValues = { email: '', password: '' };

const SigninForm = () => {
  const dispatch = useDispatch();

  const isDisabled = ({ errors, values }) => {
    const { email, password } = values;
    return Object.keys(errors).length || !email || !password;
  };

  const onSubmit = (values, actions) => {
    dispatch(loginThunk(values));
    // .unwrap().then(pld => console.log(pld)).catch(err => console.log(err));
    actions.resetForm();
  };

  const handleGoogleAuth = e => {
    console.log(e);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signinSchema}
      onSubmit={onSubmit}
    >
      {({ values, errors }) => (
        <Form>
          <Div>
            <h2>Sign in</h2>
            <Link to="/signup">Don't have an account?</Link>
          </Div>

          {Object.keys(initialValues).map(key => (
            <Fragment key={key}>
              <Label>
                {key} <ErrorMessage name={key} component="span" />
              </Label>
              <Field type={key} name={key} />
            </Fragment>
          ))}

          <SignBtn type="submit" disabled={isDisabled({ values, errors })}>
            Sign in
          </SignBtn>
          <GoogleBtn type="button" onClick={handleGoogleAuth} />
        </Form>
      )}
    </Formik>
  );
};

export default SigninForm;
