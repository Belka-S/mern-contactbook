import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { BsTelephone, BsEnvelope, BsWhatsapp, BsGithub } from 'react-icons/bs';
import { LiaTelegram, LiaViber, LiaLinkedinIn } from 'react-icons/lia';
import { PiMapPinFill } from 'react-icons/pi';

import { Div, List } from './ContactCard.styled';
import { useContacts } from 'utils/hooks';
import { FIELDS_OFF } from 'utils/constants';
import { deleteContactThunk } from 'store/contacts/contactsOperations';
import { setActiveContact } from 'store/contacts/contactsSlice';
import GrigWrap from 'components/common/GrigWrap/GrigWrap';
import Button from 'components/common/Button/Button';

const ContactCard = ({ handleAddContact }) => {
  const dispatch = useDispatch();
  const { activeContact } = useContacts();

  const link = {
    phone: {
      href: `tel:${activeContact?.phone}`,
      icon: <BsTelephone size="14" />,
    },
    email: {
      href: `mailto:${activeContact?.email}`,
      icon: <BsEnvelope size="14" />,
    },
    whatsapp: {
      href: `https://wa.me/${activeContact?.whatsapp}`,
      icon: <BsWhatsapp size="14" />,
    },
    viber: {
      href: `viber://chat?number:+${activeContact?.viber}`,
      icon: <LiaViber size="20" />,
    },
    telegram: {
      href: `https://t.me/${activeContact?.telegram.replace('@', '')}`,
      icon: <LiaTelegram size="16" />,
    },
    linkedin: {
      href: activeContact?.linkedin,
      icon: <LiaLinkedinIn size="20" />,
    },
    github: { href: activeContact?.github, icon: <BsGithub size="16" /> },
    address: {
      href:
        activeContact?.address &&
        'https://www.google.com/maps/search/' +
          `${activeContact?.address.split(/\s+/).join('+')}`,
      icon: <PiMapPinFill size="16" />,
    },
  };

  const handleDeleteContact = () => {
    dispatch(deleteContactThunk(activeContact._id));
    dispatch(setActiveContact(null));
  };

  return (
    <>
      <Div>
        {activeContact &&
          Object.keys(link).map(
            key =>
              activeContact[key] && (
                <a
                  href={link[key].href}
                  target="_blank"
                  rel="noreferrer"
                  key={link[key].href}
                >
                  {link[key].icon}
                </a>
              )
          )}
      </Div>

      <List>
        {activeContact &&
          Object.keys(activeContact).map(
            key =>
              !FIELDS_OFF.includes(key) &&
              activeContact[key] && (
                <li key={key}>
                  <span>{`${key}`}</span>
                  <span>{`${activeContact[key]}`}</span>
                </li>
              )
          )}
      </List>

      <GrigWrap mm="40px" cg="3vw">
        <Button onClick={() => handleAddContact(true)}>Add</Button>
        <Button disabled={!activeContact}>Edit</Button>
        <Button disabled={!activeContact} onClick={handleDeleteContact}>
          Delete
        </Button>
      </GrigWrap>
    </>
  );
};

export default ContactCard;

ContactCard.propTypes = { handleAddContact: PropTypes.func };
