import { Fragment } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import Link from 'components/common/Link/Link';
import SignBtn from './AuthBtns/SignBtn';
import GoogleBtn from './AuthBtns/GoogleBtn';
import { loginThunk } from 'store/auth/authOperations';
import { Form, Field, Label } from 'components/AuthForms/AuthForms.styled';
import { ErrorMessage, Div } from 'components/AuthForms/AuthForms.styled';
import { signinSchema } from 'utils/validation';

const initialValues = { email: '', password: '' };

const SigninForm = ({ setIsModal }) => {
  const dispatch = useDispatch();

  const isDisabled = ({ errors, values }) => {
    const { email, password } = values;
    return Object.keys(errors).length || !email || !password;
  };

  const onSubmit = (values, actions) => {
    dispatch(loginThunk(values))
      .unwrap()
      .then(pld => setIsModal(!pld.result.user.verifiedEmail))
      .catch(err => err.includes('401') && toast('Unauthorized'));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signinSchema}
      onSubmit={onSubmit}
    >
      {({ values, errors }) => (
        <Form>
          <Div>
            <h2>Sign in</h2>
            <Link to="/signup">Don't have an account?</Link>
          </Div>

          {Object.keys(initialValues).map(key => (
            <Fragment key={key}>
              <Label>
                {key} <ErrorMessage name={key} component="span" />
              </Label>
              <Field type={key} name={key} />
            </Fragment>
          ))}

          <SignBtn disabled={isDisabled({ values, errors })}>Sign in</SignBtn>

          <GoogleBtn />
        </Form>
      )}
    </Formik>
  );
};

export default SigninForm;
