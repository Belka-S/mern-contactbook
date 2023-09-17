import { useState } from 'react';
import { useSelector } from 'react-redux';
import { OvalLoader } from 'components/common/Loader/OvalLoader';

import { FlexWrapper } from 'components/common/FlexWrapper/FlexWrapper';
import { Container } from 'components/common/Container/Container';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { selectIsLoading, selectContacts } from 'store/seletors';

const Contacts = () => {
  const [activeContactId, setActiveContactId] = useState('');
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);

  const activeContact = contacts.find(
    contact => contact._id === activeContactId
  );

  return (
    <FlexWrapper>
      <Container pi="0">
        <Filter /> <br />
        <ContactList setActiveContactId={setActiveContactId} />
      </Container>

      <Container t2={activeContact?.name} t3={activeContact?.phone}></Container>

      {isLoading && <OvalLoader />}
    </FlexWrapper>
  );
};

export default Contacts;
