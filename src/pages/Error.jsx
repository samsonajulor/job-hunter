import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import ErrorPageWrapper from '../assets/wrappers';
import { Logo } from '../components';

const Error = () => {
  return (
    <ErrorPageWrapper className='full-page'>
      <div>
        <Logo link={img} desc={'not found'} />
        <h3>Ohh! Page Not Found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to='/'>back home</Link>
      </div>
    </ErrorPageWrapper>
  );
};
export default Error;
