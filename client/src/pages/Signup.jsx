import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Container from 'components/common/Container/Container';
import { INPUT_NAME } from 'utils/constants/constants';
import { registerThunk } from 'store/auth/authOperations';
import { useAuth } from 'utils/hooks/useAuth';
import { Toast, notify } from 'components/common/Toast/Toast';

const Signup = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error } = useAuth();
  const isBtnNotActive = username.length < 4 || password.length < 6;

  const handleChange = e => {
    switch (e.target.name) {
      case INPUT_NAME.USERNAME:
        setUsername(e.target.value);
        break;
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

    dispatch(registerThunk({ name: username, email, password }));
    error && notify('Error happend! Try once again.');
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container pt="40px" t2="Sign up">
      <form onSubmit={handleSubmit} autoComplete="off">
        <label style={{ marginRight: '30px' }}>
          Name:
          <input
            type="text"
            name={INPUT_NAME.USERNAME}
            value={username}
            onChange={handleChange}
            required
            minLength={4}
          />
        </label>
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
          Register
        </button>
      </form>

      <Link to="/signin">Sign in</Link>

      <Toast />
    </Container>
  );
};

export default Signup;
