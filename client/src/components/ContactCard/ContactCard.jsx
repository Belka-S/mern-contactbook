import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { BsTelephone, BsEnvelope, BsWhatsapp, BsGithub } from 'react-icons/bs';
import { LiaTelegram, LiaViber, LiaLinkedinIn } from 'react-icons/lia';
import { PiMapPinFill } from 'react-icons/pi';

import Button from 'components/shared/Button/Button';
import { useContacts } from 'utils/hooks';
import { CONTACT_CREDENTIALS } from 'utils/constants';
import { deleteContactThunk } from 'store/contacts/contactsOperations';
import GridWrap from 'components/shared/GridWrap/GridWrap';
import { Div, List } from './ContactCard.styled';

const ContactCard = ({ triggerForm }) => {
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
    // .unwrap().then(pld => console.log(pld)).catch(err => console.log(err));
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
              CONTACT_CREDENTIALS.includes(key) &&
              activeContact[key] && (
                <li key={key}>
                  <span>{`${key}`}:</span>
                  <span>{`${activeContact[key]}`}</span>
                </li>
              )
          )}
      </List>

      <GridWrap mm="40px" cg="3vw">
        <Button onClick={() => triggerForm('add')}>Add</Button>
        <Button disabled={!activeContact} onClick={() => triggerForm('edit')}>
          Edit
        </Button>
        <Button disabled={!activeContact} onClick={handleDeleteContact}>
          Delete
        </Button>
      </GridWrap>
    </>
  );
};

export default ContactCard;

ContactCard.propTypes = { triggerForm: PropTypes.func.isRequired };
