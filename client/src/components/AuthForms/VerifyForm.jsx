import { Fragment } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import SignBtn from './AuthBtns/SignBtn';
import { Form, Field, Label } from 'components/AuthForms/AuthForms.styled';
import { ErrorMessage, Div } from 'components/AuthForms/AuthForms.styled';
import { verifySchema } from 'utils/validation';
import { useAuth } from 'utils/hooks';
import { refreshThunk, verifyThunk } from 'store/auth/authOperations';

const VerifyForm = () => {
  const dispatch = useDispatch();
  const { userEmail } = useAuth();

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
      {({ errors }) => (
        <Form>
          <Div>
            <h2>Verify: {userEmail}</h2>
          </Div>

          <Fragment>
            <Label>
              Code: <ErrorMessage name="verificationCode" component="span" />
            </Label>
            <Field type="text" name="verificationCode" />
          </Fragment>

          <SignBtn disabled={isDisabled({ errors })}>Submit</SignBtn>
        </Form>
      )}
    </Formik>
  );
};

export default VerifyForm;
