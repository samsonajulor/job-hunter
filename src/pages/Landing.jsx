import logo from '../assets/images/job-search.png';
import main from '../assets/images/main.svg';
import { Logo } from '../components';
import { LandingPageWrapper } from '../assets/wrappers';

const Landing = () => {
  return (
    <LandingPageWrapper>
      <nav>
        <Logo css={'logo'} link={logo} desc={'job-search logo'} />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            job <span>Hunter</span>
          </h1>
          <p>Are you tired of your current job? Not to worry, JOB Hunter is here for you!.</p>
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        <Logo css={'img main-img'} link={main} desc={'job hunt'} />
      </div>
    </LandingPageWrapper>
  );
};
export default Landing;
