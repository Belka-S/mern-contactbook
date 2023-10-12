import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Formik } from 'formik';
// import { useDispatch } from 'react-redux';

import SignBtn from './AuthBtns/SignBtn';
import { Form, Field, Label } from 'components/AuthForms/AuthForms.styled';
import { ErrorMessage, Div } from 'components/AuthForms/AuthForms.styled';
import { forgotSchema } from 'utils/validation';
// import { refreshThunk, verifyThunk } from 'store/auth/authOperations';

const ForgotForm = ({ email }) => {
  // const dispatch = useDispatch();

  const isDisabled = ({ errors }) => Object.keys(errors).length;

  const onSubmit = (values, actions) => {
    console.log('values: ', values);
    // dispatch(verifyThunk(values))
    //   .unwrap() // .then(pld =>  console.log(pld))
    //   .catch(err => console.log(err))
    //   .then(() => dispatch(refreshThunk()));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ email }}
      validationSchema={forgotSchema}
      onSubmit={onSubmit}
    >
      {({ errors }) => (
        <Form>
          <Div>
            <h2>Recover password</h2>
          </Div>

          <Fragment>
            <Label>
              Email: <ErrorMessage name="email" component="span" />
            </Label>
            <Field type="text" name="email" />
          </Fragment>

          <SignBtn disabled={isDisabled({ errors })}>Submit</SignBtn>
        </Form>
      )}
    </Formik>
  );
};

export default ForgotForm;

ForgotForm.propTepes = {
  email: PropTypes.string,
};
