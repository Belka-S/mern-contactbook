import { Toaster } from 'react-hot-toast';
import { themes } from 'styles/themes';

const Toast = () => (
  <Toaster
    position="top-right"
    reverseOrder={false}
    gutter={8}
    containerClassName=""
    containerStyle={{}}
    toastOptions={{
      // Define default options
      className: '',
      duration: 2000,
      style: {
        background: `${themes.colors.white}`,
        color: `${themes.colors.error}`,
        radius: `${themes.radius.s}`,
        outline: `1.5px solid ${themes.colors.error}`,
        fontSize: '16px',
      },

      // Default options for specific types
      success: {
        duration: 5000,
        theme: {
          primary: 'green',
          secondary: 'black',
        },
      },
    }}
  />
);

export default Toast;
