import { OvalLoader } from 'components/common/Loader/OvalLoader';

import { FlexWrapper } from 'components/common/FlexWrapper/FlexWrapper';
import { Container } from 'components/common/Container/Container';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useAuth, useContacts } from 'utils/hooks';

const Contacts = () => {
  const { userId } = useAuth();
  const { activeContact, isLoading } = useContacts();

  return (
    <FlexWrapper>
      <Container pi="0">
        <Filter /> <br />
        <ContactList />
      </Container>

      <Container
        t2={userId === activeContact?.owner && activeContact?.name}
        t3={userId === activeContact?.owner && activeContact?.phone}
      ></Container>

      {isLoading && <OvalLoader />}
    </FlexWrapper>
  );
};

export default Contacts;
