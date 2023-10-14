import { Fragment } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import SignBtn from './AuthBtns/SignBtn';
import { useAuth } from 'utils/hooks';
import { verifySchema } from 'utils/validation';
import { refreshThunk, verifyThunk } from 'store/auth/authOperations';
import { Form, Field, FieldWrap } from 'components/AuthForms/AuthForms.styled';
import { Label, Tittle, ErrorMsg } from 'components/AuthForms/AuthForms.styled';
import { SuccessIcon, ErrorIcon } from 'components/AuthForms/AuthForms.styled';

const VerifyForm = () => {
  const dispatch = useDispatch();
  const { userEmail } = useAuth();

  const isValid = ({ values, errors }) => {
    const noValue = !Object.values(values)[0] && 'noValue';
    const isError = Object.values(errors).length ? 'error' : 'success';
    return noValue || isError;
  };

  const isDisabled = ({ errors }) => Object.keys(errors).length;

  const onSubmit = (values, actions) => {
    dispatch(verifyThunk(values))
      .unwrap() // .then(pld =>  console.log(pld))
      .catch(err => console.log(err))
      .then(() => dispatch(refreshThunk()));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ verificationCode: '' }}
      validationSchema={verifySchema}
      onSubmit={onSubmit}
    >
      {({ values, errors }) => (
        <Form>
          <Tittle>
            <h2>Verify: {userEmail}</h2>
          </Tittle>

          <Fragment>
            <Label>
              Code:
              <pre> </pre>
              <ErrorMsg name="verificationCode" component="span" />
            </Label>
            <FieldWrap>
              <Field
                type="text"
                name="verificationCode"
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

export default VerifyForm;
