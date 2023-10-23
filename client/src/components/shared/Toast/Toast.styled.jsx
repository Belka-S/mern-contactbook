import styled from 'styled-components';
import { ToastContainer as Toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { themes } from 'styles/themes';

export const ToastContainer = styled(Toast).attrs({
  className: 'toast-container',
  toastClassName: 'toast',
  bodyClassName: 'body',
  progressClassName: 'progress',
})`
  width: fit-content;

  & button[aria-label='close'] {
    & svg {
      color: ${themes.colors.placeholder};
    }
  }
  .toast {
    color: ${themes.colors.black};
  }
  .body {
    & svg {
      fill: ${themes.colors.accent};
    }
  }
  .progress {
    background-color: ${themes.colors.accent};
  }
`;
