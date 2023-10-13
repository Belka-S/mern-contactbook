import { useSearchParams } from 'react-router-dom';

import Container from 'components/common/Container/Container';
import ResetForm from 'components/AuthForms/ResetForm';

const ResetPage = () => {
  const [searchParams] = useSearchParams();

  const id = searchParams.get('id');
  const pwdToken = searchParams.get('pwd_token');

  return (
    <Container w="400px" h="100vh" p="0" d="flex" fd="column" jc="center">
      <ResetForm id={id} pwdToken={pwdToken} />
    </Container>
  );
};

export default ResetPage;
