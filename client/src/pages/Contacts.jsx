import { useState, useEffect } from 'react';

import { useAuth, useContacts } from 'utils/hooks';
import OvalLoader from 'components/common/Loader/OvalLoader';
import GrigWrap from 'components/common/GrigWrap/GrigWrap';
import Container from 'components/common/Container/Container';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import ContactCard from 'components/ContactCard/ContactCard';
import ContactForm from 'components/ContactForm/ContactForm';

const Contacts = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isContactForm, setIsContactForm] = useState(false);
  const { userId } = useAuth();
  const { activeContact, isLoading } = useContacts();

  const title =
    !isLoading && userId === activeContact?.owner
      ? `${activeContact?.firstName} ${activeContact?.lastName}`
      : '';
  const gridHeight = window.innerHeight > 500 ? 'calc(100vh - 90px)' : '410px';
  const headerEl = document.querySelector('header');

  useEffect(() => {
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
    <GrigWrap h={gridHeight} gtc="4fr 6fr">
      <Container pi="0">
        <Filter /> <br />
        <ContactList />
      </Container>

      {isContactForm ? (
        <ContactForm triggerForm={triggerForm} />
      ) : (
        !isMobile && (
          <Container pi="0" mt="0 0 10px 21%" t2={title}>
            {!isLoading && <ContactCard triggerForm={triggerForm} />}
          </Container>
        )
      )}

      {isLoading && <OvalLoader />}
    </GrigWrap>
  );
};

export default Contacts;
