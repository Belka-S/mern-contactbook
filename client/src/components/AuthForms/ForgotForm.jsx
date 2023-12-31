import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import SignBtn from './AuthBtns/SignBtn';
import { forgotPassThunk } from 'store/auth/authOperations';
import { forgotSchema } from 'utils/validation';
import { Form, Field, ErrorMsg, Label } from './AuthForms.styled';
import { FieldWrap, Tittle, SuccessIcon, ErrorIcon } from './AuthForms.styled';

const ForgotForm = ({ setIsForgot, email }) => {
  const dispatch = useDispatch();

  const isValid = ({ values, errors }) => {
    const noValue = !Object.values(values)[0] && 'noValue';
    const isError = Object.values(errors).length ? 'error' : 'success';
    return noValue || isError;
  };

  const isDisabled = ({ errors }) => Object.keys(errors).length;

  const onSubmit = (values, actions) => {
    dispatch(forgotPassThunk(values))
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

            <FieldWrap>
              <Field
                type="email"
                name="email"
                validation={isValid({ values, errors })}
              />

              {isValid({ values, errors }) === 'error' && <ErrorIcon />}
              {isValid({ values, errors }) === 'success' && <SuccessIcon />}
            </FieldWrap>
          </Fragment>

          <SignBtn disabled={isDisabled({ errors })}>Submit</SignBtn>
        </Form>
      )}
    </Formik>
  );
};

export default ForgotForm;

ForgotForm.propTypes = {
  setIsForgot: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};
