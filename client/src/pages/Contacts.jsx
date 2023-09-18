import { OvalLoader } from 'components/common/Loader/OvalLoader';

import { useAuth, useContacts } from 'utils/hooks';
import { FlexWrapper } from 'components/common/FlexWrapper/FlexWrapper';
import { Container } from 'components/common/Container/Container';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import ContactCard from 'components/ContactCard/ContactCard';

const Contacts = () => {
  const { userId } = useAuth();
  const { activeContact, isLoading } = useContacts();

  const title = userId === activeContact?.owner ? activeContact?.name : '';

  return (
    <FlexWrapper>
      <Container pi="0">
        <Filter /> <br />
        <ContactList />
      </Container>

      <Container t2={title}>
        <ContactCard />
      </Container>

      {isLoading && <OvalLoader />}
    </FlexWrapper>
  );
};

export default Contacts;
