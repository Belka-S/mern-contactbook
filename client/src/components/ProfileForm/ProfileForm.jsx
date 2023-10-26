import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';

import Container from 'components/shared/Container/Container';
import GridWrap from 'components/shared/GridWrap/GridWrap';
import Button from 'components/shared/Button/Button';
import { useAuth, useAbbreviation } from 'utils/hooks';
import { updateUserThunk } from 'store/auth/authOperations';
import { USER_CREDENTIALS } from 'utils/constants';
import { profileSchema, avatarSchema } from 'utils/validation';
import { Form, Field, Label, ErrorMsg } from './ProfileForm.styled';
import { Avatar, AvatarMsg, PlusIcon } from './ProfileForm.styled';
import { CheckedIcon, ExclamationIcon } from './ProfileForm.styled';

const ProfileForm = ({ setIsProfileForm }) => {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);
  const { user } = useAuth();
  const [avatarUrl, setAvatarUrl] = useState(user.avatarUrl);
  const [avatarError, setAvatarError] = useState('');
  const [mouseOver, setMouseOver] = useState(false);
  const abbreviation = useAbbreviation(user.name);

  const getInitialValues = () => {
    const initialValues = { avatar: '' };
    USER_CREDENTIALS.forEach(key => (initialValues[key] = user[key]));
    return initialValues;
  };

  const handleAddImageClick = () => fileInputRef.current.click();

  const setAvatar = async (e, setFieldValue) => {
    const avatar = e.target.files[0];
    try {
      await avatarSchema.validate({ avatar });
      const imageUrl = URL.createObjectURL(avatar);
      setAvatarError('');
      setAvatarUrl(imageUrl);
      setFieldValue('avatar', avatar);
    } catch (error) {
      setAvatarError(error.message);
      setAvatarUrl('');
    }
    e.target.blur();
  };

  const isValid = () => {
    const noValue = !(avatarUrl.includes('blob') || avatarError) && 'noValue';
    const isError = avatarError ? 'error' : 'success';
    return noValue || isError;
  };

  const onSubmit = (values, actions) => {
    const formData = new FormData();

    Object.keys(values).forEach(key => {
      if (key === 'avatar') {
        if (!values[key]) return;
        formData.append(key, values[key]);
      } else {
        formData.append(key, values[key].trim());
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
      {({ setFieldValue }) => (
        <Form>
          <Container m="0" p="12px 0 20px 3vw" d="flex" ai="end">
            <Avatar
              type="file"
              name="avatar"
              accept="image/*"
              ref={fileInputRef}
              validation={isValid()}
              url={avatarUrl}
              abbr={avatarUrl ? '' : abbreviation}
              onChange={e => setAvatar(e, setFieldValue)}
              onMouseOver={() => setMouseOver(true)}
              onMouseOut={() => setMouseOver(false)}
            />

            {(isValid() === 'noValue' || mouseOver) && (
              <PlusIcon
                onClick={handleAddImageClick}
                onMouseOver={e => {
                  setMouseOver(true);
                  e.relatedTarget.focus();
                }}
                onMouseOut={e => {
                  setMouseOver(false);
                  e.relatedTarget.blur();
                }}
              />
            )}
            {isValid() === 'success' && !mouseOver && <CheckedIcon />}
            {isValid() === 'error' && !mouseOver && <ExclamationIcon />}
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
      )}
    </Formik>
  );
};

export default ProfileForm;

ProfileForm.propTypes = { setIsProfileForm: PropTypes.func };
