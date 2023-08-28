import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Section } from 'components/Section/Section';
import { INPUT_NAME } from 'servises/constants';
import { registerThunk } from 'redux/Auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import { Toast, notify } from 'components/Toast/Toast';

const Register = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error } = useAuth();
  const isBtnNotActive = username.length < 5 || password.length < 8;

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
    <Section title="Register">
      <form onSubmit={handleSubmit} autoComplete="off">
        <label style={{ marginRight: '30px' }}>
          Username:
          <input
            type="text"
            name={INPUT_NAME.USERNAME}
            value={username}
            onChange={handleChange}
            required
            minLength={5}
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
            minLength={8}
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

      <Toast />
    </Section>
  );
};

export default Register;
