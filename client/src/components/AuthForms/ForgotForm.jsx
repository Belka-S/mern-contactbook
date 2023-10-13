import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import SignBtn from './AuthBtns/SignBtn';
import { Form, Field, ErrorMsg } from 'components/AuthForms/AuthForms.styled';
import { Label, Tittle } from 'components/AuthForms/AuthForms.styled';
import { forgotSchema } from 'utils/validation';
import { forgotThunk } from 'store/auth/authOperations';

const ForgotForm = ({ setIsForgot, email }) => {
  const dispatch = useDispatch();

  const isValid = ({ values, errors, key }) => {
    const noValue = !values[key] && 'noValue';
    const isError = errors[key] ? 'error' : 'success';
    return noValue || isError;
  };

  const isDisabled = ({ errors }) => Object.keys(errors).length;

  const onSubmit = (values, actions) => {
    dispatch(forgotThunk(values))
      .unwrap() // .then(pld => console.log(pld))
      .catch(err => console.log(err));

    setIsForgot(false); // actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ email }}
      validationSchema={forgotSchema}
      onSubmit={onSubmit}
    >
      {({ values, errors }) => (
        <Form>
          <Tittle>
            <h2>Get reset link</h2>
          </Tittle>

          <Fragment>
            <Label>
              Email:
              <pre> </pre>
              <ErrorMsg name="email" component="span" />
            </Label>
            <Field
              type="email"
              name="email"
              validation={isValid({ values, errors, key: 'email' })}
            />
          </Fragment>

          <SignBtn disabled={isDisabled({ errors })}>Submit</SignBtn>
        </Form>
      )}
    </Formik>
  );
};

export default ForgotForm;

ForgotForm.propTepes = {
  setIsForgot: PropTypes.func,
  email: PropTypes.string,
};
