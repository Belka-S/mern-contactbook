import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';

import AvatarInput from 'components/ProfileForm/AvatarInput/AvatarInput';
import GridWrap from 'components/shared/GridWrap/GridWrap';
import Button from 'components/shared/Button/Button';
import { useAuth } from 'utils/hooks';
import { updateUserThunk } from 'store/auth/authOperations';
import { USER_CREDENTIALS } from 'utils/constants';
import { profileSchema } from 'utils/validation';
import { Form, Field, Label, ErrorMsg } from './ProfileForm.styled';

const initialValues = { avatar: '' };

const ProfileForm = ({ setIsProfileForm }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  USER_CREDENTIALS.forEach(key => (initialValues[key] = user[key]));

  const onSubmit = values => {
    const formData = new FormData();
    Object.keys(values).forEach(key => {
      const data = key === 'avatar' ? values[key] : values[key].trim();
      values[key] !== initialValues[key] && formData.append(key, data);
    });
    const isEmpty = formData.entries().next().done;
    !isEmpty && dispatch(updateUserThunk(formData));
    setIsProfileForm(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={profileSchema}
      onSubmit={onSubmit}
    >
      {({ setFieldValue }) => (
        <Form>
          <AvatarInput setFieldValue={setFieldValue} />

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
      )}
    </Formik>
  );
};

export default ProfileForm;

ProfileForm.propTypes = { setIsProfileForm: PropTypes.func };
