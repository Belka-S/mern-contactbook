import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';

import GridWrap from 'components/shared/GridWrap/GridWrap';
import Button from 'components/shared/Button/Button';
import { useAuth, useAbbreviation } from 'utils/hooks';
import { updateUserThunk } from 'store/auth/authOperations';
import { USER_CREDENTIALS } from 'utils/constants';
import { profileSchema } from 'utils/validation';
import { Form, Field, Label, ErrorMsg, Avatar } from './ProfileForm.styled';

const ProfileForm = ({ setIsProfileForm }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const abbreviation = useAbbreviation(user.name);
  const [avatarUrl, setAvatarUrl] = useState(user.avatarUrl);

  const getInitialValues = () => {
    const initialValues = { avatar: '' };
    USER_CREDENTIALS.forEach(key => (initialValues[key] = user[key]));
    return initialValues;
  };

  const onSubmit = (values, actions) => {
    const formData = new FormData();

    Object.keys(values).forEach(key => {
      if (key === 'avatar' && !values[key]) return;
      if (typeof values[key] === 'string') {
        formData.append(key, values[key].trim());
      } else {
        formData.append(key, values[key]);
      }
    });

    dispatch(updateUserThunk(formData));
    setIsProfileForm(false);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={getInitialValues()}
      validationSchema={profileSchema}
      onSubmit={onSubmit}
    >
      {formik => (
        <Form>
          <Avatar
            type="file"
            name="avatar"
            accept="image/*"
            url={avatarUrl}
            abbr={avatarUrl ? '' : abbreviation}
            onChange={e => {
              const avatar = e.target.files[0];
              const imageUrl = URL.createObjectURL(avatar);
              setAvatarUrl(imageUrl);
              formik.setFieldValue('avatar', avatar);
            }}
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
      )}
    </Formik>
  );
};

export default ProfileForm;

ProfileForm.propTypes = { setIsProfileForm: PropTypes.func };
