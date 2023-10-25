import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';

import GridWrap from 'components/shared/GridWrap/GridWrap';
import Button from 'components/shared/Button/Button';
import { useAuth, useAbbreviation } from 'utils/hooks';
import { updateUserThunk } from 'store/auth/authOperations';
import { USER_CREDENTIALS } from 'utils/constants';
import { Form, Field, Label, ErrorMsg, Avatar } from './ProfileForm.styled';

const ProfileForm = ({ setIsProfileForm }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const abbreviation = useAbbreviation(user.name);

  const getInitialValues = () => {
    const initialValues = {};
    USER_CREDENTIALS.forEach(key => (initialValues[key] = user[key]));
    return initialValues;
  };

  const onSubmit = (values, actions) => {
    dispatch(updateUserThunk(values));
    setIsProfileForm(false);

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={getInitialValues()}
      validationSchema={''}
      onSubmit={onSubmit}
    >
      <Form>
        <Avatar
          type="file"
          name="avatar"
          url={user.avatarUrl}
          abbr={user.avatarUrl ? '' : abbreviation}
        />

        {USER_CREDENTIALS.map(key => (
          <div className="wrapper" key={key}>
            <Label>
              {key}:
              <Field type="text" name={key} />
            </Label>
            <ErrorMsg name={key} component="div" />
          </div>
        ))}

        <GridWrap mm="40px" cg="3vw" gtc="1fr 1fr 1fr">
          <Button type="submit">Submit</Button>
          <Button onClick={() => setIsProfileForm(false)}>Cancel</Button>
        </GridWrap>
      </Form>
    </Formik>
  );
};

export default ProfileForm;

ProfileForm.propTypes = { setIsProfileForm: PropTypes.func };
