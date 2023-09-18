import { useSelector } from 'react-redux';
import { OvalLoader } from 'components/common/Loader/OvalLoader';

import { FlexWrapper } from 'components/common/FlexWrapper/FlexWrapper';
import { Container } from 'components/common/Container/Container';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { selectIsLoading, selectActiveContact } from 'store/seletors';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const activeContact = useSelector(selectActiveContact);

  return (
    <FlexWrapper>
      <Container pi="0">
        <Filter /> <br />
        <ContactList />
      </Container>

      <Container t2={activeContact?.name} t3={activeContact?.phone}></Container>

      {isLoading && <OvalLoader />}
    </FlexWrapper>
  );
};

export default Contacts;
