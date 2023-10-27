import { useState, useRef } from 'react';

import Container from 'components/shared/Container/Container';
import { useAuth, useAbbreviation } from 'utils/hooks';
import { avatarSchema } from 'utils/validation';
import { Avatar, AvatarMsg, PlusIcon } from './AvatarInput.styled';
import { CheckedIcon, ExclamationIcon } from './AvatarInput.styled';

const AvatarInput = ({ setFieldValue }) => {
  const fileInputRef = useRef(null);
  const { user } = useAuth();
  const [avatarUrl, setAvatarUrl] = useState(user.avatarUrl);
  const [avatarError, setAvatarError] = useState('');
  const [mouseOver, setMouseOver] = useState(false);
  const abbreviation = useAbbreviation(user.name);

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
      console.log('error: ', error.message);
      if (!error.message.includes('URL')) {
        setAvatarError(error.message);
      }
      setAvatarUrl('');
    }
    e.target.blur();
  };

  const isValid = () => {
    const noValue = !(avatarUrl.includes('blob') || avatarError) && 'noValue';
    const isError = avatarError ? 'error' : 'success';
    return noValue || isError;
  };
  return (
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
  );
};

export default AvatarInput;
