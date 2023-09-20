import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { BsTelephone, BsEnvelope, BsWhatsapp, BsGithub } from 'react-icons/bs';
import { LiaTelegram, LiaViber, LiaLinkedinIn } from 'react-icons/lia';
import { PiMapPinFill } from 'react-icons/pi';

import { Div, List } from './ContactCard.styled';
import { useContacts } from 'utils/hooks';
import { deleteContactThunk } from 'store/contacts/contactsOperations';
import GrigWrap from 'components/common/GrigWrap/GrigWrap';
import Button from 'components/common/Button/Button';

const ContactCard = () => {
  const dispatch = useDispatch();
  const { activeContact } = useContacts();

  const off = ['_id', 'name', 'group', 'favorite', 'owner'];

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

  return (
    <>
      <Div>
        {Object.keys(link).map(
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
        {Object.keys(activeContact).map(
          key =>
            !off.includes(key) &&
            activeContact[key] && (
              <li key={key}>
                <span>{`${key}`}</span>
                <span>{`${activeContact[key]}`}</span>
              </li>
            )
        )}
      </List>

      <GrigWrap mm="40px" cg="3vw">
        <Button>Add</Button>
        <Button>Edit</Button>
        <Button onClick={() => dispatch(deleteContactThunk(activeContact._id))}>
          Delete
        </Button>
      </GrigWrap>
    </>
  );
};

export default ContactCard;

ContactCard.propTypes = { marginTop: PropTypes.string };
