import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import SignBtn from './AuthBtns/SignBtn';
import { resetThunk } from 'store/auth/authOperations';
import { Form, Field, ErrorMsg } from 'components/AuthForms/AuthForms.styled';
import { Label, Tittle } from 'components/AuthForms/AuthForms.styled';
import { resetSchema } from 'utils/validation';

const initialValues = { newPass: '', confirmPass: '' };

const ResetForm = ({ id, pwdToken }) => {
  const dispatch = useDispatch();

  const isValid = ({ values, errors, key }) => {
    const noValue = !values[key] && 'noValue';
    const isError = errors[key] ? 'error' : 'success';
    return noValue || isError;
  };

  const isDisabled = ({ errors, values }) => {
    const isError = Object.keys(errors).length;
    const noValue = Object.keys(values).some(key => !values[key]);
    return noValue || isError;
  };

  const onSubmit = (values, actions) => {
    dispatch(resetThunk({ ...values, id, pwdToken }))
      .unwrap() // .then(pld => console.log(pld))
      .catch(err => console.log(err));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={resetSchema}
      onSubmit={onSubmit}
    >
      {({ values, errors }) => (
        <Form>
          <Tittle>
            <h2>Reset password</h2>
          </Tittle>

          {Object.keys(initialValues).map(key => (
            <Fragment key={key}>
              <Label>
                {key.at(0).toUpperCase() +
                  key.replace('Pass', ' password:').substring(1)}
                <pre> </pre>
                <ErrorMsg name={key} component="span" />
              </Label>
              <Field
                type="password"
                name={key}
                validation={isValid({ values, errors, key })}
              />
            </Fragment>
          ))}

          <SignBtn disabled={isDisabled({ values, errors })}>Submit</SignBtn>
        </Form>
      )}
    </Formik>
  );
};

export default ResetForm;

ResetForm.propTypes = {
  id: PropTypes.string.isRequired,
  pwdToken: PropTypes.string.isRequired,
};
