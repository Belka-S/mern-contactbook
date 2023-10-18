import { useState, useEffect } from 'react';

import { useAuth, useContacts } from 'utils/hooks';
import OvalLoader from 'components/shared/Loader/OvalLoader';
import GridWrap from 'components/shared/GridWrap/GridWrap';
import Container from 'components/shared/Container/Container';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import ContactCard from 'components/ContactCard/ContactCard';
import ContactForm from 'components/ContactForm/ContactForm';

const ContactsPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isContactForm, setIsContactForm] = useState(false);
  const { userId } = useAuth();
  const { activeContact, isLoading } = useContacts();

  const title =
    !isLoading && userId === activeContact?.owner
      ? `${activeContact?.firstName} ${activeContact?.lastName}`
      : '';

  const gridHeight = window.innerHeight > 600 ? 'calc(100vh - 90px)' : '510px';
  const headerEl = document.querySelector('header');

  useEffect(() => {
    setIsMobile(headerEl?.clientWidth <= 300);

    window.addEventListener('resize', e => {
      setIsMobile(headerEl?.clientWidth <= 300);
    });
    return () => {
      window.removeEventListener('resize', e => {
        setIsMobile(headerEl?.clientWidth <= 300);
      });
    };
  }, [headerEl]);

  const triggerForm = bool => {
    setIsContactForm(bool);
  };

  return (
    <GridWrap h={gridHeight} gtc="2fr 3fr">
      <Container p="0" t1="Contacts">
        <Filter /> <br />
        <ContactList />
      </Container>

      {isContactForm && (
        <ContactForm triggerForm={triggerForm} isContactForm={isContactForm} />
      )}

      {!isContactForm && !isMobile && (
        <Container p="0" mt="0 0 10px 21%" t2={title}>
          {!isLoading && <ContactCard triggerForm={triggerForm} />}
        </Container>
      )}

      {isLoading && <OvalLoader />}
    </GridWrap>
  );
};

export default ContactsPage;
