import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom/dist';

import { authenticate } from 'store/auth/authSlice';
import { refreshThunk } from 'store/auth/authOperations';

const Google = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const token = searchParams.get('token');
  const refreshToken = searchParams.get('refreshToken');

  dispatch(authenticate({ result: { user: { token, refreshToken } } }));
  dispatch(refreshThunk());
};

export default Google;
