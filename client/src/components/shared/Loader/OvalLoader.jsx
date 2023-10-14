import { Oval } from 'react-loader-spinner';

const OvalLoader = () => (
  <Oval
    height={60}
    width={60}
    color="tomato"
    wrapperStyle={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }}
    wrapperClass=""
    visible={true}
    ariaLabel="oval-loading"
    secondaryColor="tomato"
    strokeWidth={8}
    strokeWidthSecondary={8}
  />
);

export default OvalLoader;
