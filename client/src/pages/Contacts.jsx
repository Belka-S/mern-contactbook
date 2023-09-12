import { useSelector } from 'react-redux';
import { OvalLoader } from 'components/Loader/OvalLoader';

import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { selectIsLoading } from 'store/seletors';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Section mainTitle={'Contacts'}>
        <Filter /> <br />
        <ContactList />
      </Section>

      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>

      {isLoading && <OvalLoader />}
    </div>
  );
};

export default Contacts;
