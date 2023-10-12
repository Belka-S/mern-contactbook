import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import LinkRoute from 'components/AuthForms/AuthLinks/LinkRoute';
import SignBtn from './AuthBtns/SignBtn';
import GoogleBtn from './AuthBtns/GoogleBtn';
import { registerThunk } from 'store/auth/authOperations';
import { Form, Field, Label } from 'components/AuthForms/AuthForms.styled';
import { ErrorMessage, Div } from 'components/AuthForms/AuthForms.styled';
import { signupSchema } from 'utils/validation';

const initialValues = { name: '', email: '', password: '' };

const SignupForm = ({ setIsVerify }) => {
  const dispatch = useDispatch();

  const isDisabled = ({ errors, values }) => {
    const { name, email, password } = values;
    return Object.keys(errors).length || !name || !email || !password;
  };

  const onSubmit = (values, actions) => {
    dispatch(registerThunk(values))
      .unwrap()
      .then(pld => setIsVerify(!pld.result.user.verifiedEmail))
      .catch(err => console.log(err));

    actions.resetForm();
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
            <LinkRoute to="/signin">Have an account?</LinkRoute>
          </Div>

          {Object.keys(initialValues).map(key => (
            <Fragment key={key}>
              <Label>
                {key.at(0).toUpperCase() + key.substring(1) + ':'}
                <pre> </pre>
                <ErrorMessage name={key} component="span" />
              </Label>
              <Field type={key} name={key} />
            </Fragment>
          ))}

          <SignBtn disabled={isDisabled({ values, errors })}>Sign up</SignBtn>

          <GoogleBtn />
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;

SignupForm.propTypes = {
  setIsVerify: PropTypes.func,
};
