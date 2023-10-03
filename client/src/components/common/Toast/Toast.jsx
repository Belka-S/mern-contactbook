import toast, { Toaster } from 'react-hot-toast';
import { themes } from 'styles/themes';

export const notify = text => toast(text);

export const Toast = () => (
  <Toaster
    position="top-right"
    reverseOrder={false}
    gutter={8}
    containerClassName=""
    containerStyle={{}}
    toastOptions={{
      // Define default options
      className: '',
      duration: 3000,
      style: {
        background: `${themes.colors.white}`,
        color: `${themes.colors.failed}`,
        radius: `${themes.radius.s}`,
        outline: `1.5px solid ${themes.colors.failed}`,
        fontSize: '18px',
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
