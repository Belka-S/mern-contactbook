import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';

import GridWrap from 'components/shared/GridWrap/GridWrap';
import Button from 'components/shared/Button/Button';
import { useAuth, useAbbreviation } from 'utils/hooks';
import { updateUserThunk } from 'store/auth/authOperations';
import { USER_CREDENTIALS } from 'utils/constants';
import { profileSchema, avatarSchema } from 'utils/validation';
import { Form, Field, Label, ErrorMsg } from './ProfileForm.styled';
import { Avatar, AvatarMsg } from './ProfileForm.styled';
import Container from 'components/shared/Container/Container';

const ProfileForm = ({ setIsProfileForm }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [avatarUrl, setAvatarUrl] = useState(user.avatarUrl);
  const [avatarError, setAvatarError] = useState('');
  const abbreviation = useAbbreviation(user.name);

  const getInitialValues = () => {
    const initialValues = { avatar: '' };
    USER_CREDENTIALS.forEach(key => (initialValues[key] = user[key]));
    return initialValues;
  };

  const setAvatar = async (e, setFieldValue) => {
    const avatar = e.target.files[0];
    try {
      await avatarSchema.validate({ avatar });
      const imageUrl = URL.createObjectURL(avatar);
      setAvatarUrl(imageUrl);
      setFieldValue('avatar', avatar);
    } catch (error) {
      setAvatarError(error.message);
    }
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
      {({ setFieldValue }) => {
        return (
          <Form>
            <Container m="0" p="12px 0 20px 3vw" d="flex" ai="end">
              <Avatar
                type="file"
                name="avatar"
                // accept="image/*"
                url={avatarUrl}
                abbr={avatarUrl ? '' : abbreviation}
                onChange={e => setAvatar(e, setFieldValue)}
              />
              {avatarError && <AvatarMsg>{avatarError}</AvatarMsg>}
            </Container>

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
        );
      }}
    </Formik>
  );
};

export default ProfileForm;

ProfileForm.propTypes = { setIsProfileForm: PropTypes.func };
