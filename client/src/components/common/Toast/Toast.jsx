import toast, { Toaster } from 'react-hot-toast';

export const notify = text => toast(text);

export const Toast = () => (
  <Toaster
    position="top-center"
    reverseOrder={false}
    gutter={8}
    containerClassName=""
    containerStyle={{}}
    toastOptions={{
      // Define default options
      className: '',
      duration: 2000,
      style: {
        background: 'tomato',
        color: '#fff',
        fontSize: '20px',
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
