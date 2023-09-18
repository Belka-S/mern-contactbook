import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container } from 'components/common/Container/Container';
import { INPUT_NAME } from 'utils/constants/constants';
import { loginThunk } from 'store/auth/authOperations';
import { Toast, notify } from 'components/common/Toast/Toast';

const Signin = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isBtnNotActive = email.length < 4 || password.length < 6;

  const handleChange = e => {
    switch (e.target.name) {
      case INPUT_NAME.EMAIL:
        setEmail(e.target.value);
        break;
      case INPUT_NAME.PASSWORD:
        setPassword(e.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(loginThunk({ email, password }))
      .unwrap()
      .catch(error => notify('Error happend! Try once again.'));

    setEmail('');
    setPassword('');
  };

  return (
    <Container pt="40px" t2="Sign in">
      <form onSubmit={handleSubmit} autoComplete="off">
        <label style={{ marginRight: '30px' }}>
          E-mail:
          <input
            type="email"
            name={INPUT_NAME.EMAIL}
            value={email}
            onChange={handleChange}
            required
          />
        </label>
        <label style={{ marginRight: '30px' }}>
          Password:
          <input
            type="password"
            name={INPUT_NAME.PASSWORD}
            value={password}
            onChange={handleChange}
            required
            minLength={6}
          />
        </label>
        <button
          type="submit"
          disabled={isBtnNotActive}
          style={{ padding: '0 20px' }}
        >
          Log in
        </button>
      </form>

      <Link to="/signup">Sign up</Link>

      <Toast />
    </Container>
  );
};

export default Signin;