import { Fragment } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import Link from 'components/common/Link/Link';
import SignBtn from './SignBtn/SignBtn';
import { registerThunk } from 'store/auth/authOperations';
import { Form, Field, Label } from 'components/SignForms/SignForms.styled';
import { ErrorMessage, Div } from 'components/SignForms/SignForms.styled';
import { signupSchema } from 'utils/validation';
import { errMsg } from 'utils/constants';
import { notify } from 'components/common/Toast/Toast';

const initialValues = { name: '', email: '', password: '' };

const SignupForm = () => {
  const dispatch = useDispatch();

  const isDisabled = ({ errors, values }) => {
    const { name, email, password } = values;
    return Object.keys(errors).length || !name || !email || !password;
  };

  const onSubmit = (values, actions) => {
    dispatch(registerThunk(values))
      .unwrap()
      .then(pld => console.log(pld.status))
      .catch(err => notify(errMsg(err)));
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
            <Link to="/signin">Have an account?</Link>
          </Div>

          {Object.keys(initialValues).map(key => (
            <Fragment key={key}>
              <Label>
                {key} <ErrorMessage name={key} component="span" />
              </Label>
              <Field type={key} name={key} />
            </Fragment>
          ))}

          <SignBtn type="submit" disabled={isDisabled({ values, errors })}>
            Sign up
          </SignBtn>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
