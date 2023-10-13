import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import LinkRoute from 'components/AuthForms/AuthLinks/LinkRoute';
import SignBtn from './AuthBtns/SignBtn';
import GoogleBtn from './AuthBtns/GoogleBtn';
import { registerThunk } from 'store/auth/authOperations';
import Label, { Form, Field } from 'components/AuthForms/AuthForms.styled';
import { ErrorMessage, Div } from 'components/AuthForms/AuthForms.styled';
import { signupSchema } from 'utils/validation';

const initialValues = { name: '', email: '', password: '' };

const SignupForm = ({ setIsVerify }) => {
  const dispatch = useDispatch();

  const isValid = ({ values, errors, key }) => {
    const noValue = !values[key] && 'noValue';
    const isError = errors[key] ? 'error' : 'success';
    return noValue || isError;
  };

  const isDisabled = ({ errors, values }) => {
    const isError = Object.keys(errors).length;
    const noValue = Object.keys(values).some(key => !values[key]);
    return isError || noValue;
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
              <Field
                type={key}
                name={key}
                validation={isValid({ values, errors, key })}
              />
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
