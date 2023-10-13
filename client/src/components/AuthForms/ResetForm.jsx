import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import SignBtn from './AuthBtns/SignBtn';
import { resetThunk } from 'store/auth/authOperations';
import { Form, Field, Label } from 'components/AuthForms/AuthForms.styled';
import { ErrorMessage, Div } from 'components/AuthForms/AuthForms.styled';
import { resetSchema } from 'utils/validation';

const initialValues = { newPass: '', confirmPass: '' };

const ResetForm = ({ id, pwdToken }) => {
  const dispatch = useDispatch();

  const isDisabled = ({ errors, values }) => {
    const isError = Object.keys(errors).length;
    const noValue = Object.keys(values).some(key => !values[key]);
    return isError || noValue;
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
          <Div>
            <h2>Reset password</h2>
          </Div>

          {Object.keys(initialValues).map(key => (
            <Fragment key={key}>
              <Label>
                {key.at(0).toUpperCase() +
                  key.replace('Pass', ' password:').substring(1)}
                <pre> </pre>
                <ErrorMessage name={key} component="span" />
              </Label>
              <Field type="password" name={key} />
            </Fragment>
          ))}

          <SignBtn disabled={isDisabled({ values, errors })}>Submit</SignBtn>
        </Form>
      )}
    </Formik>
  );
};

export default ResetForm;

ResetForm.propTypes = { id: PropTypes.string, pwdToken: PropTypes.string };
