import { Fragment } from 'react';
import { Formik } from 'formik';
// import { useDispatch } from 'react-redux';

import SignBtn from './AuthBtns/SignBtn';
import { Form, Field, Label } from 'components/AuthForms/AuthForms.styled';
import { ErrorMessage, Div } from 'components/AuthForms/AuthForms.styled';
import { verifySchema } from 'utils/validation';
import { useAuth } from 'utils/hooks';

const VerifyForm = () => {
  // const dispatch = useDispatch();
  const { userEmail } = useAuth();

  const isDisabled = ({ errors }) => Object.keys(errors).length;

  const onSubmit = (values, actions) => {
    console.log(values);
    // dispatch(loginThunk(values))
    //   .unwrap()
    //   .then(pld => setIsModal(!pld.result.user.verifiedEmail));
    // .catch(err => console.log(err));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ code: '' }}
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
              code <ErrorMessage name="code" component="span" />
            </Label>
            <Field type="text" name="code" />
          </Fragment>

          <SignBtn disabled={isDisabled({ errors })}>Submit</SignBtn>
        </Form>
      )}
    </Formik>
  );
};

export default VerifyForm;
