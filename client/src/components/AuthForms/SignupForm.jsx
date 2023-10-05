import { Fragment } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import Link from 'components/common/Link/Link';
import { SignBtn, GoogleBtn } from './AuthBtns/AuthBtns';
import { registerThunk } from 'store/auth/authOperations';
import { Form, Field, Label } from 'components/AuthForms/AuthForms.styled';
import { ErrorMessage, Div } from 'components/AuthForms/AuthForms.styled';
import { signupSchema } from 'utils/validation';
import { errMsg } from 'utils/constants';
import { notify } from 'components/common/Toast/Toast';

const initialValues = { name: '', email: '', password: '' };

const SignupForm = () => {
  const dispatch = useDispatch();

  const isDisabled = ({ errors, values }) => {
    const { name, email, password } = values;
    return Object.keys(errors).length || !name || !email || !password;
  };

  const onSubmit = (values, actions) => {
    dispatch(registerThunk(values))
      .unwrap()
      .then(pld => console.log(pld.status))
      .catch(err => notify(errMsg(err)));
    actions.resetForm();
  };

  const handleGoogleAuth = e => {
    console.log(e);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signupSchema}
      onSubmit={onSubmit}
    >
      {({ values, errors }) => (
        <Form>
          <Div>
            <h2>Sign up</h2>
            <Link to="/signin">Have an account?</Link>
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
            Sign up
          </SignBtn>
          <GoogleBtn type="button" onClick={handleGoogleAuth} />
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
